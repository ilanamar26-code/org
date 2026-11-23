import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Server-only Supabase client with the service role key: bypasses RLS, never sent to the browser.
let client: SupabaseClient | null = null
export function adminDb(): SupabaseClient | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) return null
  if (!client) client = createClient(url, key, { auth: { persistSession: false } })
  return client
}

export const KINDS = ['deals', 'orgs', 'people', 'notes', 'files', 'leadstate'] as const
