import { currentUser } from '@clerk/nextjs/server'
import { SignOutButton } from '@clerk/nextjs'
import './vault.css'

export default async function VaultLayout({ children }: { children: React.ReactNode }) {
  const user = await currentUser()

  return (
    <div className="vault-shell">
      <header className="vault-header">
        <div className="vault-header-left">
          <span className="vault-wordmark">ORION</span>
          <span className="vault-header-label">Document Vault</span>
        </div>
        <div className="vault-header-right">
          <span className="vault-user">{user?.emailAddresses[0]?.emailAddress}</span>
          <SignOutButton redirectUrl="/sign-in">
            <button className="vault-signout">Sign out</button>
          </SignOutButton>
        </div>
      </header>
      <main className="vault-main">{children}</main>
    </div>
  )
}
