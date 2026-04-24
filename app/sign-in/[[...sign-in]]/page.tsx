import { SignIn } from '@clerk/nextjs'
import './sign-in.css'

export default function SignInPage() {
  return (
    <div className="auth-wrap">
      <div className="auth-header">
        <span className="auth-wordmark">ORION</span>
        <span className="auth-sub">Document Vault</span>
      </div>
      <SignIn />
    </div>
  )
}
