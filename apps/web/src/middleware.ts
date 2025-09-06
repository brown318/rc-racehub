import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  const hostname = request.headers.get('host') || ''
  
  // Skip middleware for admin routes, API routes, and static files
  if (
    pathname.startsWith('/admin') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_next') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Extract subdomain from hostname
  // For development: localhost:3000 or tenant.localhost:3000
  // For production: tenant.rcracehub.com
  let subdomain = ''
  
  if (hostname.includes('localhost')) {
    // Development: extract subdomain from tenant.localhost:3000
    const parts = hostname.split('.')
    if (parts.length > 1 && parts[0] !== 'localhost') {
      subdomain = parts[0]
    }
  } else {
    // Production: extract subdomain from tenant.rcracehub.com
    const parts = hostname.split('.')
    if (parts.length > 2) {
      subdomain = parts[0]
    }
  }

  // If we have a subdomain, add it to headers for the app to use
  if (subdomain) {
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-tenant-subdomain', subdomain)
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  }

  // No subdomain - could be main site or admin
  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
