'use client'
import { useState, useRef, useCallback } from 'react'
import { formatBytes } from '@/lib/vault'
import useSWR from 'swr'

interface Doc {
  id: string
  name: string
  filename: string
  size: number
  mimeType: string
  uploadedAt: string
  authorizedUserIds: string[]
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

export default function DocumentsPage() {
  const { data, mutate } = useSWR<{ documents: Doc[] }>('/api/admin/documents', fetcher)
  const documents = data?.documents ?? []

  const [docName, setDocName] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [status, setStatus] = useState<{ type: 'success' | 'error'; msg: string } | null>(null)
  const fileRef = useRef<HTMLInputElement>(null)

  const handleUpload = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    if (!file || !docName.trim()) return

    setUploading(true)
    setStatus(null)

    try {
      const formData = new FormData()
      formData.append('name', docName.trim())
      formData.append('file', file)

      const res = await fetch('/api/admin/documents', {
        method: 'POST',
        body: formData,
      })

      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Upload failed')

      setStatus({ type: 'success', msg: `"${docName}" uploaded successfully.` })
      setDocName('')
      setFile(null)
      if (fileRef.current) fileRef.current.value = ''
      mutate()
    } catch (err) {
      setStatus({ type: 'error', msg: err instanceof Error ? err.message : 'Upload failed.' })
    } finally {
      setUploading(false)
    }
  }, [file, docName, mutate])

  const handleDelete = useCallback(async (id: string, name: string) => {
    if (!confirm(`Delete "${name}"? This cannot be undone.`)) return
    await fetch(`/api/admin/documents/${id}`, { method: 'DELETE' })
    mutate()
  }, [mutate])

  return (
    <div className="admin-section">
      <h2 className="admin-section-title">Upload Document</h2>

      <form className="admin-form" onSubmit={handleUpload}>
        <div className="admin-form-row">
          <div className="admin-field">
            <label className="admin-label">Document name</label>
            <input
              className="admin-input"
              type="text"
              placeholder="e.g. Q1 2025 Term Sheet"
              value={docName}
              onChange={e => setDocName(e.target.value)}
              required
            />
          </div>
          <div className="admin-field">
            <label className="admin-label">File</label>
            <input
              ref={fileRef}
              className="admin-input"
              type="file"
              onChange={e => setFile(e.target.files?.[0] ?? null)}
              required
            />
          </div>
        </div>

        {status && (
          <div className={`admin-status ${status.type}`}>{status.msg}</div>
        )}

        <button className="admin-btn" type="submit" disabled={uploading || !file || !docName.trim()}>
          {uploading ? 'Uploading…' : 'Upload'}
        </button>
      </form>

      <h2 className="admin-section-title">All Documents</h2>

      {documents.length === 0 ? (
        <p className="admin-empty">No documents uploaded yet.</p>
      ) : (
        <table className="admin-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Size</th>
              <th>Uploaded</th>
              <th>Access</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id}>
                <td>
                  <div>{doc.name}</div>
                  <div style={{ fontFamily: 'var(--helvetica)', fontSize: 10, color: 'var(--dim)', marginTop: 3 }}>
                    {doc.filename}
                  </div>
                </td>
                <td className="meta">{formatBytes(doc.size)}</td>
                <td className="meta">
                  {new Date(doc.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </td>
                <td className="meta">
                  {doc.authorizedUserIds.length} user{doc.authorizedUserIds.length !== 1 ? 's' : ''}
                </td>
                <td className="actions">
                  <button
                    className="admin-btn-danger"
                    onClick={() => handleDelete(doc.id, doc.name)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
