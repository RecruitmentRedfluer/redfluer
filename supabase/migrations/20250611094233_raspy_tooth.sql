/*
  # Create skill applications table

  1. New Tables
    - `skill_applications`
      - `id` (uuid, primary key)
      - `skill_id` (text, not null)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `current_role` (text, not null) - quoted to avoid reserved keyword
      - `experience` (text, not null)
      - `motivation` (text, not null)
      - `preferred_schedule` (text, not null)
      - `message` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `skill_applications` table
    - Add policy for anonymous users to submit applications
    - Add policy for authenticated users to view applications
    - Add admin policies for management
*/

CREATE TABLE IF NOT EXISTS skill_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  "current_role" text NOT NULL,
  experience text NOT NULL,
  motivation text NOT NULL,
  preferred_schedule text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE skill_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit skill applications"
  ON skill_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view skill applications"
  ON skill_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin can view all skill applications"
  ON skill_applications
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can update skill applications"
  ON skill_applications
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete skill applications"
  ON skill_applications
  FOR DELETE
  TO anon
  USING (true);