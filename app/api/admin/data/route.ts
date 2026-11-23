import { NextResponse } from 'next/server'
import { adminDb } from '@/lib/admin/db'

export const dynamic = 'force-dynamic'

// Everything the back office shows: CRM records plus the enquiries sent from the website form.
export async function GET() {
  const db = adminDb()
  if (!db) return NextResponse.json({ configured: false, records: [], leads: [] })
  const records: unknown[] = []
  for (let from = 0; ; from += 1000) {
    const { data, error } = await db.from('crm_records').select('kind,id,data,deleted,updated_at').range(from, from + 999)
    if (error) return NextResponse.json({ configured: true, error: error.message, records: [], leads: [] }, { status: 500 })
    records.push(...(data || []))
    if (!data || data.length < 1000) break
  }
  const { data: leads, error: le } = await db
    .from('qualification_submissions')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(1000)
  return NextResponse.json({ configured: true, records, leads: leads || [], leadsError: le?.message || null })
}
