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

interface DocsData {
  documents: Doc[]
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

function optimisticToggle(current: DocsData | undefined, docId: string, userId: string, grant: boolean): DocsData {
  return {
    documents: (current?.documents ?? []).map(d =>
      d.id === docId
        ? {
            ...d,
            authorizedUserIds: grant
              ? [...d.authorizedUserIds, userId]
              : d.authorizedUserIds.filter(id => id !== userId),
          }
        : d
    ),
  }
}

export default function UsersPage() {
  const { data: usersData, mutate: mutateUsers } = useSWR<{ users: ClerkUser[] }>('/api/admin/users', fetcher)
  const { data: docsData, mutate: mutateDocs } = useSWR<DocsData>('/api/admin/documents', fetcher)

  const users = usersData?.users ?? []
  const documents = docsData?.documents ?? []

  const [email, setEmail] = useState('')
  const [inviting, setInviting] = useState(false)
  const [inviteStatus, setInviteStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const [pending, setPending] = useState<Set<string>>(new Set())

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
    const key = `${userId}:${docId}`
    if (pending.has(key)) return

    const grant = !currentlyGranted

    setPending(prev => new Set(prev).add(key))
    try {
      await mutateDocs(
        async (current) => {
          const res = await fetch('/api/admin/access', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId, documentId: docId, grant }),
          })
          if (!res.ok) throw new Error('Failed to update access')
          return optimisticToggle(current, docId, userId, grant)
        },
        {
          optimisticData: (current) => optimisticToggle(current, docId, userId, grant),
          rollbackOnError: true,
          revalidate: false,
        }
      )
    } finally {
      setPending(prev => {
        const next = new Set(prev)
        next.delete(key)
        return next
      })
    }
  }, [pending, mutateDocs])

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
                  const key = `${user.id}:${doc.id}`
                  const isPending = pending.has(key)
                  return (
                    <div key={doc.id} className="access-doc-item">
                      <button
                        type="button"
                        role="switch"
                        aria-checked={granted}
                        aria-label={`${granted ? 'Revoke' : 'Grant'} access to ${doc.name}`}
                        className={`access-toggle${granted ? ' access-toggle--on' : ''}${isPending ? ' access-toggle--pending' : ''}`}
                        onClick={() => handleToggle(user.id, doc.id, granted)}
                        disabled={isPending}
                      >
                        <span className="access-toggle-thumb" />
                      </button>
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
