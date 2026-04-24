import { put, list, del } from '@vercel/blob'

export interface VaultDocument {
  id: string
  name: string
  filename: string
  blobUrl: string
  size: number
  mimeType: string
  uploadedAt: string
  authorizedUserIds: string[]
}

export interface VaultManifest {
  documents: VaultDocument[]
}

const MANIFEST_PATHNAME = 'vault-manifest.json'

export async function getManifest(): Promise<VaultManifest> {
  try {
    const { blobs } = await list({ prefix: MANIFEST_PATHNAME })
    const manifest = blobs.find(b => b.pathname === MANIFEST_PATHNAME)
    if (!manifest) return { documents: [] }
    const response = await fetch(manifest.url, {
      cache: 'no-store',
      headers: { authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
    })
    if (!response.ok) return { documents: [] }
    return response.json()
  } catch {
    return { documents: [] }
  }
}

export async function saveManifest(manifest: VaultManifest): Promise<void> {
  await put(MANIFEST_PATHNAME, JSON.stringify(manifest), {
    access: 'private',
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: 'application/json',
  })
}

export async function addDocument(
  doc: Omit<VaultDocument, 'id' | 'uploadedAt' | 'authorizedUserIds'>
): Promise<VaultDocument> {
  const manifest = await getManifest()
  const newDoc: VaultDocument = {
    ...doc,
    id: crypto.randomUUID(),
    uploadedAt: new Date().toISOString(),
    authorizedUserIds: [],
  }
  manifest.documents.push(newDoc)
  await saveManifest(manifest)
  return newDoc
}

export async function deleteDocument(id: string): Promise<void> {
  const manifest = await getManifest()
  const doc = manifest.documents.find(d => d.id === id)
  if (!doc) return
  try {
    await del(doc.blobUrl)
  } catch {
    // blob may already be gone
  }
  manifest.documents = manifest.documents.filter(d => d.id !== id)
  await saveManifest(manifest)
}

export async function setAccess(
  documentId: string,
  userId: string,
  grant: boolean
): Promise<void> {
  const manifest = await getManifest()
  const doc = manifest.documents.find(d => d.id === documentId)
  if (!doc) return
  if (grant) {
    if (!doc.authorizedUserIds.includes(userId)) {
      doc.authorizedUserIds.push(userId)
    }
  } else {
    doc.authorizedUserIds = doc.authorizedUserIds.filter(id => id !== userId)
  }
  await saveManifest(manifest)
}

export async function getDocumentsForUser(userId: string): Promise<VaultDocument[]> {
  const manifest = await getManifest()
  return manifest.documents.filter(doc => doc.authorizedUserIds.includes(userId))
}

export async function getDocumentById(id: string): Promise<VaultDocument | null> {
  const manifest = await getManifest()
  return manifest.documents.find(d => d.id === id) ?? null
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}
