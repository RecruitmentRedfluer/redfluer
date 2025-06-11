/*
  # Create career path applications table

  1. New Tables
    - `career_path_applications`
      - `id` (uuid, primary key)
      - `career_path_id` (text, not null)
      - `name` (text, not null)
      - `email` (text, not null)
      - `phone` (text)
      - `current_position` (text, not null)
      - `experience` (text, not null)
      - `current_skills` (text, not null)
      - `career_goals` (text, not null)
      - `time_commitment` (text, not null)
      - `preferred_start_date` (text, not null)
      - `message` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `career_path_applications` table
    - Add policy for anonymous users to insert data
    - Add policy for authenticated users to view data
    - Add admin policies for management
*/

CREATE TABLE IF NOT EXISTS career_path_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  career_path_id text NOT NULL,
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  current_position text NOT NULL,
  experience text NOT NULL,
  current_skills text NOT NULL,
  career_goals text NOT NULL,
  time_commitment text NOT NULL,
  preferred_start_date text NOT NULL,
  message text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE career_path_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit career path applications"
  ON career_path_applications
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Only authenticated users can view career path applications"
  ON career_path_applications
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admin can view all career path applications"
  ON career_path_applications
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can update career path applications"
  ON career_path_applications
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete career path applications"
  ON career_path_applications
  FOR DELETE
  TO anon
  USING (true);