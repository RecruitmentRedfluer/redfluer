/*
  # Create shifts table for shift management

  1. New Tables
    - `shifts`
      - `id` (uuid, primary key)
      - `title` (text, not null)
      - `location` (text, not null)
      - `facility_name` (text, not null)
      - `start_time` (timestamptz, not null)
      - `end_time` (timestamptz, not null)
      - `hourly_rate` (decimal, not null)
      - `sector` (text, not null)
      - `requirements` (text array)
      - `urgency` (text, default 'medium')
      - `description` (text)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, default now())
      - `updated_at` (timestamptz, default now())

  2. Security
    - Enable RLS on `shifts` table
    - Add policy for anyone to view active shifts
    - Add policy for authenticated users to manage shifts
    - Add policy for anonymous users to manage shifts (for admin)
*/

CREATE TABLE IF NOT EXISTS shifts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  location text NOT NULL,
  facility_name text NOT NULL,
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  hourly_rate decimal(10,2) NOT NULL,
  sector text NOT NULL,
  requirements text[] DEFAULT '{}',
  urgency text DEFAULT 'medium',
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE shifts ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view active shifts
CREATE POLICY "Anyone can view active shifts"
  ON shifts
  FOR SELECT
  TO anon
  USING (is_active = true);

-- Allow authenticated users to manage shifts
CREATE POLICY "Authenticated users can manage shifts"
  ON shifts
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Allow anonymous users to manage shifts (for admin panel)
CREATE POLICY "Admin can view all shifts"
  ON shifts
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can insert shifts"
  ON shifts
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can update shifts"
  ON shifts
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete shifts"
  ON shifts
  FOR DELETE
  TO anon
  USING (true);

-- Create an update trigger to set updated_at
CREATE TRIGGER update_shifts_updated_at
  BEFORE UPDATE ON shifts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();