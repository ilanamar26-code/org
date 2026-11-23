// Back office session: a cookie holding an HMAC of a fixed label, keyed by ADMIN_PASSWORD.
// Changing ADMIN_PASSWORD in Vercel signs everyone out.
export const ADMIN_COOKIE = 'org_admin'

async function hmac(key: string, msg: string): Promise<string> {
  const enc = new TextEncoder()
  const k = await crypto.subtle.importKey('raw', enc.encode(key), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign'])
  const sig = await crypto.subtle.sign('HMAC', k, enc.encode(msg))
  return Array.from(new Uint8Array(sig)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

export async function sessionToken(): Promise<string | null> {
  const pw = process.env.ADMIN_PASSWORD
  if (!pw) return null
  return hmac(pw, 'org-backoffice-v1')
}

export function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let r = 0
  for (let i = 0; i < a.length; i++) r |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return r === 0
}

export async function isAuthed(cookieValue: string | undefined): Promise<boolean> {
  const t = await sessionToken()
  return !!t && !!cookieValue && safeEqual(cookieValue, t)
}
