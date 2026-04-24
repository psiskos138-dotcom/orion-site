import { auth } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'
import { redirect } from 'next/navigation'
import { isAdmin } from '@/lib/auth'
import { AdminNav } from './AdminNav'
import './admin.css'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth()
  if (!isAdmin(userId)) redirect('/')

  return (
    <div className="admin-shell">
      <header className="admin-header">
        <div className="admin-header-left">
          <span className="admin-wordmark">ORION</span>
          <span className="admin-header-label">Admin</span>
        </div>
        <div className="admin-header-right">
          <SignOutButton redirectUrl="/sign-in">
            <button className="admin-signout">Sign out</button>
          </SignOutButton>
        </div>
      </header>
      <AdminNav />
      <main className="admin-main">{children}</main>
    </div>
  )
}
