import { auth } from '@clerk/nextjs/server'
import { clerkClient } from '@clerk/nextjs/server'
import { isAdmin } from '@/lib/auth'

export async function GET(): Promise<Response> {
  try {
    const { userId } = await auth()
    if (!isAdmin(userId)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const client = await clerkClient()
    const { data } = await client.users.getUserList({ limit: 100 })

    const users = data
      .filter(u => u.id !== process.env.ADMIN_USER_ID)
      .map(u => ({
        id: u.id,
        firstName: u.firstName,
        lastName: u.lastName,
        email: u.emailAddresses[0]?.emailAddress ?? '',
      }))

    return Response.json({ users })
  } catch (err) {
    console.error('[users GET]', err)
    return Response.json({ error: String(err) }, { status: 500 })
  }
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { userId } = await auth()
    if (!isAdmin(userId)) {
      return Response.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { email } = await request.json()
    if (!email) {
      return Response.json({ error: 'Email required' }, { status: 400 })
    }

    const client = await clerkClient()
    await client.invitations.createInvitation({
      emailAddress: email,
      redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL ?? ''}/vault`,
      notify: true,
    })

    return Response.json({ success: true })
  } catch (err: unknown) {
    const clerkErrors = (err as { errors?: { code: string }[] })?.errors
    if (clerkErrors?.[0]?.code === 'form_identifier_exists') {
      return Response.json(
        { error: 'That email already has an account — they can sign in directly.' },
        { status: 422 }
      )
    }
    console.error('[users POST]', err)
    return Response.json({ error: String(err) }, { status: 500 })
  }
}
