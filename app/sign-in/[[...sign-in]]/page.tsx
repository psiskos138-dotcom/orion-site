import { SignIn } from '@clerk/nextjs'
import './sign-in.css'

const appearance = {
  elements: {
    rootBox: 'si-clerk-root',
    cardBox: 'si-clerk-box',
    card: 'si-clerk-card',
    formFields: 'si-clerk-fields',
    formField: 'si-clerk-field',
    formFieldLabel: 'si-clerk-label',
    formFieldInput: 'si-clerk-input',
    formFieldInputShowPasswordButton: 'si-clerk-hide',
    formButtonPrimary: 'si-clerk-btn',
    formResendCodeLink: 'si-clerk-resend',
    formFieldErrorText: 'si-clerk-error',
    alertText: 'si-clerk-error',
    identityPreviewText: 'si-clerk-identity-text',
    identityPreviewEditButton: 'si-clerk-identity-edit',
    header: 'si-clerk-hide',
    footer: 'si-clerk-hide',
    footerAction: 'si-clerk-hide',
    socialButtonsRoot: 'si-clerk-hide',
    dividerRow: 'si-clerk-hide',
  },
}

export default function SignInPage() {
  return (
    <div className="si-doc">
      <header className="si-header">
        <span className="si-wordmark">ORION</span>
        <span className="si-label">Document Vault</span>
      </header>

      <div className="si-lockup">
        <div className="si-rs-1" />
        <div className="si-rs-2" />
        <div className="si-rs-3" />
      </div>

      <main className="si-body">
        <div className="si-form-wrap">
          <SignIn appearance={appearance} />
        </div>
      </main>
    </div>
  )
}
