import { NextRequest, NextResponse } from 'next/server'
import { ADMIN_COOKIE, safeEqual, sessionToken } from '@/lib/admin/auth'

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  const token = await sessionToken()
  if (!token) return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  let password = ''
  try { password = String((await req.json()).password || '') } catch {}
  await new Promise((r) => setTimeout(r, 400)) // slows down guessing
  if (!safeEqual(password, process.env.ADMIN_PASSWORD as string)) {
    return NextResponse.json({ error: 'wrong_password' }, { status: 401 })
  }
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE, token, { httpOnly: true, secure: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 24 * 30 })
  return res
}
