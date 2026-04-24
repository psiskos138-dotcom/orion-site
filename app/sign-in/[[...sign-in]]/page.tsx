import { SignIn } from '@clerk/nextjs'
import './sign-in.css'

const appearance = {
  variables: {
    colorPrimary: '#b00',
    colorText: '#111',
    colorTextSecondary: '#888',
    colorBackground: '#fff',
    colorInputBackground: '#fff',
    colorInputText: '#111',
    borderRadius: '0px',
    fontSize: '15px',
  },
  elements: {
    card: {
      boxShadow: 'none',
      border: 'none',
      padding: '0',
      gap: '20px',
    },
    headerTitle: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontWeight: '500',
      fontSize: '11px',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      color: '#111',
    },
    headerSubtitle: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontSize: '14px',
      color: '#888',
    },
    formFieldLabel: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '9px',
      letterSpacing: '0.18em',
      textTransform: 'uppercase' as const,
      color: '#888',
    },
    formFieldInput: {
      border: '1px solid #111',
      borderRadius: '0',
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: '16px',
      color: '#111',
      backgroundColor: '#fff',
    },
    formButtonPrimary: {
      backgroundColor: '#111',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '9.5px',
      fontWeight: '400',
      letterSpacing: '0.2em',
      textTransform: 'uppercase' as const,
      borderRadius: '0',
      boxShadow: 'none',
    },
    footer: { display: 'none' },
    footerAction: { display: 'none' },
    footerActionText: { display: 'none' },
    identityPreviewText: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontSize: '15px',
    },
    dividerText: {
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '9px',
      letterSpacing: '0.16em',
      textTransform: 'uppercase' as const,
      color: '#bbb',
    },
    dividerLine: { backgroundColor: '#e8e8e8' },
    alternativeMethodsBlockButton: {
      border: '1px solid #ddd',
      borderRadius: '0',
      fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
      fontSize: '10px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      color: '#444',
    },
    formFieldErrorText: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontSize: '13px',
      color: '#b00',
    },
    alertText: {
      fontFamily: '"Cormorant Garamond", Georgia, serif',
      fontStyle: 'italic',
      fontSize: '14px',
    },
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
        <SignIn appearance={appearance} />
      </main>
    </div>
  )
}
