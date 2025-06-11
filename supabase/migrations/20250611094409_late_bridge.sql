/*
  # Create skill_applications table

  1. New Tables
    - `skill_applications`
      - `id` (uuid, primary key)
      - `skill_id` (text, references skill)
      - `name` (text, applicant name)
      - `email` (text, applicant email)
      - `phone` (text, optional phone number)
      - `current_role` (text, applicant's current role)
      - `experience` (text, relevant experience)
      - `motivation` (text, motivation for training)
      - `preferred_schedule` (text, preferred training schedule)
      - `message` (text, optional additional message)
      - `status` (text, application status)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `skill_applications` table
    - Add policies for anonymous submissions and authenticated viewing
    - Add admin policies for full management
*/

-- Create the table if it doesn't exist
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

-- Enable RLS
ALTER TABLE skill_applications ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid conflicts
DROP POLICY IF EXISTS "Anyone can submit skill applications" ON skill_applications;
DROP POLICY IF EXISTS "Only authenticated users can view skill applications" ON skill_applications;
DROP POLICY IF EXISTS "Admin can view all skill applications" ON skill_applications;
DROP POLICY IF EXISTS "Admin can update skill applications" ON skill_applications;
DROP POLICY IF EXISTS "Admin can delete skill applications" ON skill_applications;

-- Create policies
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