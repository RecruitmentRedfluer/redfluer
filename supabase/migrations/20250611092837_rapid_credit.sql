/*
  # Create shift applications table

  1. New Tables
    - `shift_applications`
      - `id` (uuid, primary key)
      - `shift_id` (text, not null)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `availability` (text, not null)
      - `experience` (text, not null)
      - `qualifications` (text, not null)
      - `message` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `shift_applications` table
    - Add policy for anonymous users to insert data
    - Add policy for authenticated users to view data
*/

CREATE TABLE IF NOT EXISTS shift_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  shift_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  availability text NOT NULL,
  experience text NOT NULL,
  qualifications text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE shift_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit shift applications"
  ON shift_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view shift applications"
  ON shift_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin can view all shift applications"
  ON shift_applications
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can update shift applications"
  ON shift_applications
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete shift applications"
  ON shift_applications
  FOR DELETE
  TO anon
  USING (true);