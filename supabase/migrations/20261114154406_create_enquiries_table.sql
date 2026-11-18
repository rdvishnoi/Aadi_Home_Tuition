/*
# Create enquiries table for tuition enquiry form

1. New Tables
- `enquiries` — stores enquiry submissions from the website contact form.
  - `id` (uuid, primary key, auto-generated)
  - `student_name` (text, not null)
  - `parent_name` (text, not null)
  - `mobile` (text, not null)
  - `student_class` (text, not null) — 6th/7th/8th/9th/10th
  - `board` (text, not null) — CBSE/ICSE/State Board/Other
  - `medium` (text, not null) — Hindi/English
  - `subjects` (text, not null)
  - `message` (text, nullable)
  - `created_at` (timestamptz, not null, defaults to now)

2. Security
- Enable RLS on `enquiries`.
- Grant INSERT only to `anon` and `authenticated` — visitors may submit
  enquiries but nobody can read them through the public API. No SELECT
  grant means enquiry data (names, phone numbers) is never publicly
  readable. The business owner can read enquiries via the Supabase
  dashboard or service role.
- Insert policy: any visitor may submit a valid enquiry row.
*/

CREATE TABLE IF NOT EXISTS enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name text NOT NULL,
  parent_name text NOT NULL,
  mobile text NOT NULL,
  student_class text NOT NULL,
  board text NOT NULL,
  medium text NOT NULL,
  subjects text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE enquiries ENABLE ROW LEVEL SECURITY;

GRANT INSERT ON enquiries TO anon, authenticated;

DROP POLICY IF EXISTS "anon_insert_enquiries" ON enquiries;
CREATE POLICY "anon_insert_enquiries" ON enquiries
FOR INSERT TO anon, authenticated WITH CHECK (true);