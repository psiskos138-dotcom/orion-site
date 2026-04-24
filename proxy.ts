import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher([
  '/vault(.*)',
  '/admin(.*)',
  '/api/vault(.*)',
  '/api/admin(.*)',
])

const SECURITY_HEADERS: Record<string, string> = {
  'X-Frame-Options': 'DENY',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
  'Strict-Transport-Security': 'max-age=63072000; includeSubDomains; preload',
}

export default clerkMiddleware(
  async (auth, req) => {
    if (isProtectedRoute(req)) {
      await auth.protect()
    }

    const response = NextResponse.next()
    for (const [key, value] of Object.entries(SECURITY_HEADERS)) {
      response.headers.set(key, value)
    }
    return response
  },
  {
    contentSecurityPolicy: {
      strict: true,
      directives: {
        // Clerk defaults already include 'self' and 'unsafe-inline' for style-src;
        // add Google Fonts on top.
        'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        // Clerk has no font-src by default — add it for Google Fonts files.
        'font-src': ["'self'", 'https://fonts.gstatic.com'],
        // Prevent this site from being embedded anywhere.
        'frame-ancestors': ["'none'"],
      },
    },
  },
)

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
