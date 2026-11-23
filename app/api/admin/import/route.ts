import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/admin/db'

export const dynamic = 'force-dynamic'

// One-off import of the Pipedrive export (JSON prepared from the xlsx files).
// Records already in the CRM are kept unless "overwrite" is set.
export async function POST(req: NextRequest) {
  const db = adminDb()
  if (!db) return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  const body = await req.json().catch(() => null)
  if (!body || typeof body !== 'object') return NextResponse.json({ error: 'invalid' }, { status: 400 })
  const overwrite = !!body.overwrite
  const seed = body.seed || {}
  const rows: { kind: string; id: string; data: unknown; deleted: boolean; updated_at: string }[] = []
  const now = new Date().toISOString()
  for (const kind of ['deals', 'orgs', 'people', 'notes', 'files']) {
    for (const r of Array.isArray(seed[kind]) ? seed[kind] : []) {
      if (r && r.id != null) rows.push({ kind, id: String(r.id), data: r, deleted: false, updated_at: now })
    }
  }
  if (!rows.length) return NextResponse.json({ error: 'empty' }, { status: 400 })
  let imported = 0
  for (let i = 0; i < rows.length; i += 500) {
    const { error, count } = await db
      .from('crm_records')
      .upsert(rows.slice(i, i + 500), { onConflict: 'kind,id', ignoreDuplicates: !overwrite, count: 'exact' })
    if (error) return NextResponse.json({ error: error.message, imported }, { status: 500 })
    imported += count ?? 0
  }
  return NextResponse.json({ ok: true, received: rows.length, imported })
}
