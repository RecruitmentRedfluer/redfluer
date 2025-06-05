/*
  # Create job postings table

  1. New Tables
    - `job_postings`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `location` (text, not null)
      - `contract_type` (text, not null)
      - `role` (text, not null)
      - `salary` (text, not null)
      - `description` (text, not null)
      - `posted_date` (timestamptz, default now())
      - `expires_at` (timestamptz)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `job_postings` table
    - Add policy for anyone to view active jobs
    - Add policy for authenticated users to manage jobs
*/

CREATE TABLE IF NOT EXISTS job_postings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  contract_type text NOT NULL,
  role text NOT NULL,
  salary text NOT NULL,
  description text NOT NULL,
  posted_date timestamptz DEFAULT now(),
  expires_at timestamptz,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE job_postings ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active jobs
CREATE POLICY "Anyone can view active jobs"
  ON job_postings
  FOR SELECT
  TO anon
  USING (is_active = true AND (expires_at IS NULL OR expires_at > now()));

-- Allow authenticated users to manage jobs
CREATE POLICY "Authenticated users can manage jobs"
  ON job_postings
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create an update trigger to set updated_at
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_job_postings_updated_at
  BEFORE UPDATE ON job_postings
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();