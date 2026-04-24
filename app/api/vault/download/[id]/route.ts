import { auth } from '@clerk/nextjs/server'
import { isAdmin } from '@/lib/auth'
import { getDocumentById } from '@/lib/vault'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { userId } = await auth()
  if (!userId) {
    return new Response('Unauthorized', { status: 401 })
  }

  const { id } = await params
  const doc = await getDocumentById(id)

  if (!doc) {
    return new Response('Not found', { status: 404 })
  }

  if (!isAdmin(userId) && !doc.authorizedUserIds.includes(userId)) {
    return new Response('Forbidden', { status: 403 })
  }

  const upstream = await fetch(doc.blobUrl, {
    headers: { authorization: `Bearer ${process.env.BLOB_READ_WRITE_TOKEN}` },
  })
  if (!upstream.ok) {
    return new Response('Document unavailable', { status: 502 })
  }

  const headers = new Headers()
  headers.set('Content-Type', doc.mimeType)
  headers.set('Content-Disposition', `attachment; filename="${encodeURIComponent(doc.filename)}"`)
  if (doc.size) headers.set('Content-Length', String(doc.size))

  return new Response(upstream.body, { headers })
}
