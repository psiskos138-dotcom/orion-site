import { put } from '@vercel/blob'
import { auth } from '@clerk/nextjs/server'
import { isAdmin } from '@/lib/auth'
import { getManifest, addDocument } from '@/lib/vault'

export const maxDuration = 60

export async function GET(): Promise<Response> {
  const { userId } = await auth()
  if (!isAdmin(userId)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }
  const manifest = await getManifest()
  return Response.json({ documents: manifest.documents })
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { userId } = await auth()
    if (!isAdmin(userId)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const formData = await request.formData()
    const name = formData.get('name')
    const file = formData.get('file')

    if (typeof name !== 'string' || !name || !(file instanceof File)) {
      return Response.json({ error: 'Missing fields' }, { status: 400 })
    }

    const blob = await put(file.name, file, {
      access: 'private',
      addRandomSuffix: true,
      multipart: file.size > 5 * 1024 * 1024,
    })

    const doc = await addDocument({
      name,
      filename: file.name,
      blobUrl: blob.url,
      size: file.size,
      mimeType: file.type || 'application/octet-stream',
    })

    return Response.json({ document: doc })
  } catch (err) {
    console.error('[upload]', err)
    return Response.json({ error: String(err) }, { status: 500 })
  }
}
