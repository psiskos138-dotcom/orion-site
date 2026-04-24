import { auth } from '@clerk/nextjs/server'
import { isAdmin } from '@/lib/auth'
import { deleteDocument } from '@/lib/vault'

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
): Promise<Response> {
  const { userId } = await auth()
  if (!isAdmin(userId)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  await deleteDocument(id)
  return Response.json({ success: true })
}
