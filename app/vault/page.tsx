import { auth } from '@clerk/nextjs/server'
import { getDocumentsForUser, formatBytes } from '@/lib/vault'

function FileIcon({ mimeType }: { mimeType: string }) {
  if (mimeType === 'application/pdf') return <span className="doc-icon pdf">PDF</span>
  if (mimeType.startsWith('image/')) return <span className="doc-icon img">IMG</span>
  if (mimeType.includes('word')) return <span className="doc-icon doc">DOC</span>
  if (mimeType.includes('sheet') || mimeType.includes('excel')) return <span className="doc-icon xls">XLS</span>
  return <span className="doc-icon file">FILE</span>
}

export default async function VaultPage() {
  const { userId } = await auth()
  const documents = await getDocumentsForUser(userId!)

  return (
    <div className="vault-content">
      <div className="vault-title-row">
        <h1 className="vault-title">Your Documents</h1>
        <span className="vault-count">{documents.length} file{documents.length !== 1 ? 's' : ''}</span>
      </div>

      {documents.length === 0 ? (
        <div className="vault-empty">
          <p>No documents have been shared with you yet.</p>
        </div>
      ) : (
        <div className="vault-list">
          {documents.map(doc => (
            <div key={doc.id} className="vault-item">
              <FileIcon mimeType={doc.mimeType} />
              <div className="vault-item-info">
                <span className="vault-item-name">{doc.name}</span>
                <span className="vault-item-meta">
                  {doc.filename} &middot; {formatBytes(doc.size)} &middot; {new Date(doc.uploadedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}
                </span>
              </div>
              <a
                href={`/api/vault/download/${doc.id}`}
                className="vault-download"
                download={doc.filename}
              >
                Download
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
