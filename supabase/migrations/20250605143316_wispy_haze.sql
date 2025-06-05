/*
  # Create job applications table

  1. New Tables
    - `job_applications`
      - `id` (uuid, primary key)
      - `job_id` (text, not null)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `cv_url` (text)
      - `cover_letter` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())
  2. Security
    - Enable RLS on `job_applications` table
    - Add policy for anonymous users to insert data
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  job_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  cv_url text,
  cover_letter text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view job applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);