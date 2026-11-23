import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { adminDb, KINDS } from '@/lib/admin/db'

export const dynamic = 'force-dynamic'

const Body = z.object({
  kind: z.enum(KINDS),
  id: z.string().min(1).max(120),
  data: z.record(z.unknown()),
  deleted: z.boolean().optional(),
})

export async function POST(req: NextRequest) {
  const db = adminDb()
  if (!db) return NextResponse.json({ error: 'not_configured' }, { status: 503 })
  const parsed = Body.safeParse(await req.json().catch(() => null))
  if (!parsed.success) return NextResponse.json({ error: 'invalid' }, { status: 400 })
  const { kind, id, data, deleted } = parsed.data
  const { error } = await db
    .from('crm_records')
    .upsert({ kind, id, data, deleted: !!deleted, updated_at: new Date().toISOString() })
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
