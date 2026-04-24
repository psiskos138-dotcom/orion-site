'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function AdminNav() {
  const path = usePathname()
  return (
    <nav className="admin-nav">
      <Link href="/admin/documents" className={`admin-nav-link${path.startsWith('/admin/documents') ? ' active' : ''}`}>
        Documents
      </Link>
      <Link href="/admin/users" className={`admin-nav-link${path.startsWith('/admin/users') ? ' active' : ''}`}>
        Counterparties
      </Link>
    </nav>
  )
}
