'use client'
import { useState, useCallback } from 'react'
import useSWR from 'swr'

interface ClerkUser {
  id: string
  firstName: string | null
  lastName: string | null
  email: string
}

interface Doc {
  id: string
  name: string
  authorizedUserIds: string[]
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function UsersPage() {
  const { data: usersData, mutate: mutateUsers } = useSWR<{ users: ClerkUser[] }>('/api/admin/users', fetcher)
  const { data: docsData, mutate: mutateDocs } = useSWR<{ documents: Doc[] }>('/api/admin/documents', fetcher)

  const users = usersData?.users ?? []
  const documents = docsData?.documents ?? []

  const [email, setEmail] = useState('')
  const [inviting, setInviting] = useState(false)
  const [inviteStatus, setInviteStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)

  const handleInvite = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    setInviting(true)
    setInviteStatus(null)
    try {
      const res = await fetch('/api/admin/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim() }),
      })
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to send invitation')
      setInviteStatus({ type: 'success', msg: `Invitation sent to ${email}.` })
      setEmail('')
      mutateUsers()
    } catch (err) {
      setInviteStatus({ type: 'error', msg: err instanceof Error ? err.message : 'Failed.' })
    } finally {
      setInviting(false)
    }
  }, [email, mutateUsers])

  const handleToggle = useCallback(async (userId: string, docId: string, currentlyGranted: boolean) => {
    await fetch('/api/admin/access', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId, documentId: docId, grant: !currentlyGranted }),
    })
    mutateDocs()
  }, [mutateDocs])

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Invite Counterparty</h2>

      <form className="admin-invite-form" onSubmit={handleInvite}>
        <div className="admin-field">
          <label className="admin-label">Email address</label>
          <input
            className="admin-input"
            type="email"
            placeholder="counterparty@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
          />
        </div>
        <button className="admin-btn" type="submit" disabled={inviting}>
          {inviting ? 'Sending…' : 'Send Invitation'}
        </button>
      </form>

      {inviteStatus && (
        <div className={`admin-status ${inviteStatus.type}`} style={{ marginBottom: 32 }}>
          {inviteStatus.msg}
        </div>
      )}

      <h2 className="admin-section-title">Document Access</h2>

      {documents.length === 0 && (
        <p className="admin-empty">Upload documents first to manage access.</p>
      )}

      {documents.length > 0 && users.length === 0 && (
        <p className="admin-empty">No counterparties yet. Invite one above.</p>
      )}

      {users.length > 0 && documents.length > 0 && (
        <div className="access-grid">
          {users.map(user => (
            <div key={user.id} className="access-row">
              <div className="access-user">
                <span className="access-user-name">
                  {user.firstName || user.lastName
                    ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim()
                    : '—'}
                </span>
                <span className="access-user-email">{user.email}</span>
              </div>
              <div className="access-docs">
                {documents.map(doc => {
                  const granted = doc.authorizedUserIds.includes(user.id)
                  return (
                    <div key={doc.id} className="access-doc-item">
                      <label className="access-toggle">
                        <input
                          type="checkbox"
                          checked={granted}
                          onChange={() => handleToggle(user.id, doc.id, granted)}
                        />
                        <span className="access-toggle-track" />
                      </label>
                      <span className="access-doc-name">{doc.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
