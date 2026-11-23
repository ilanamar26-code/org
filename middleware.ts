import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_COOKIE, isAuthed } from '@/lib/admin/auth'

// Protects the back office: /admin (UI), /backoffice/* (its static app) and /api/admin/* (data).
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (pathname === '/api/admin/login' || pathname === '/backoffice/login.html') return NextResponse.next()
  const ok = await isAuthed(req.cookies.get(ADMIN_COOKIE)?.value)
  if (pathname.startsWith('/api/admin')) {
    return ok ? NextResponse.next() : NextResponse.json({ error: 'unauthorized' }, { status: 401 })
  }
  if (pathname === '/admin' || pathname === '/admin/') {
    const url = req.nextUrl.clone()
    url.pathname = ok ? '/backoffice/crm.html' : '/backoffice/login.html'
    const res = NextResponse.rewrite(url)
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    res.headers.set('Cache-Control', 'no-store')
    return res
  }
  if (pathname.startsWith('/backoffice')) {
    if (!ok) return NextResponse.redirect(new URL('/admin', req.url))
    const res = NextResponse.next()
    res.headers.set('X-Robots-Tag', 'noindex, nofollow')
    return res
  }
  return NextResponse.next()
}

export const config = { matcher: ['/admin', '/admin/', '/backoffice/:path*', '/api/admin/:path*'] }
