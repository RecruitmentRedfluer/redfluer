/*
  # Add admin policies for job management

  1. Security Changes
    - Add policy for anonymous users to insert job postings (for admin panel)
    - Add policy for anonymous users to update job postings (for admin panel)  
    - Add policy for anonymous users to delete job postings (for admin panel)
    - Add policy for anonymous users to select all job postings (for admin panel)

  Note: These policies allow anonymous access for admin functionality.
  In production, consider implementing proper authentication for admin users.
*/

-- Allow anonymous users to select all job postings (for admin panel)
CREATE POLICY "Admin can view all jobs"
  ON job_postings
  FOR SELECT
  TO anon
  USING (true);

-- Allow anonymous users to insert job postings (for admin panel)
CREATE POLICY "Admin can insert jobs"
  ON job_postings
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anonymous users to update job postings (for admin panel)
CREATE POLICY "Admin can update jobs"
  ON job_postings
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

-- Allow anonymous users to delete job postings (for admin panel)
CREATE POLICY "Admin can delete jobs"
  ON job_postings
  FOR DELETE
  TO anon
  USING (true);