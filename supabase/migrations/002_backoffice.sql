-- Back office (CRM) storage. Run once in the Supabase SQL editor.
-- Every CRM record (deal, organisation, contact, note, file, lead status) is one row.
CREATE TABLE IF NOT EXISTS crm_records (
  kind TEXT NOT NULL,
  id TEXT NOT NULL,
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  deleted BOOLEAN NOT NULL DEFAULT FALSE,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (kind, id)
);
CREATE INDEX IF NOT EXISTS idx_crm_records_kind ON crm_records(kind);

-- Only the server (service role key) reads or writes the CRM: RLS on, no public policy.
ALTER TABLE crm_records ENABLE ROW LEVEL SECURITY;

-- Website enquiries: the public form may insert, nobody may read them except the server.
ALTER TABLE qualification_submissions ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "public can submit enquiries" ON qualification_submissions;
CREATE POLICY "public can submit enquiries" ON qualification_submissions
  FOR INSERT TO anon WITH CHECK (true);
