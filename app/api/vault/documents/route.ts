import { auth } from '@clerk/nextjs/server'
import { getDocumentsForUser } from '@/lib/vault'

export async function GET(): Promise<Response> {
  const { userId } = await auth()
  if (!userId) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const documents = await getDocumentsForUser(userId)
  return Response.json({
    documents: documents.map(({ blobUrl: _blobUrl, ...rest }) => rest),
  })
}
