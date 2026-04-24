import { auth } from '@clerk/nextjs/server'
import { isAdmin } from '@/lib/auth'
import { setAccess } from '@/lib/vault'

export async function POST(request: Request): Promise<Response> {
  const { userId } = await auth()
  if (!isAdmin(userId)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { userId: targetUserId, documentId, grant } = await request.json()
  if (!targetUserId || !documentId || typeof grant !== 'boolean') {
    return Response.json({ error: 'Missing fields' }, { status: 400 })
  }

  await setAccess(documentId, targetUserId, grant)
  return Response.json({ success: true })
}
