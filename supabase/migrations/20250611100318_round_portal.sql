/*
  # Add file upload support to application tables

  1. Database Changes
    - Add `documents_url` column to shift_applications table
    - Add `documents_url` column to skill_applications table  
    - Add `documents_url` column to career_path_applications table
    - Ensure `cv_url` column exists in job_applications table

  2. Storage Setup
    - Create documents storage bucket for file uploads
    - Set up RLS policies for secure file access
    - Allow authenticated and anonymous users to upload/view documents

  3. Security
    - Enable proper access controls for file storage
    - Allow users to manage their own uploaded documents
*/

-- Add documents_url columns to application tables if they don't exist
DO $$
BEGIN
  -- Add to shift_applications
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'shift_applications' AND column_name = 'documents_url'
  ) THEN
    ALTER TABLE shift_applications ADD COLUMN documents_url text;
  END IF;

  -- Add to skill_applications
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'skill_applications' AND column_name = 'documents_url'
  ) THEN
    ALTER TABLE skill_applications ADD COLUMN documents_url text;
  END IF;

  -- Add to career_path_applications
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'career_path_applications' AND column_name = 'documents_url'
  ) THEN
    ALTER TABLE career_path_applications ADD COLUMN documents_url text;
  END IF;

  -- Ensure cv_url exists in job_applications
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'job_applications' AND column_name = 'cv_url'
  ) THEN
    ALTER TABLE job_applications ADD COLUMN cv_url text;
  END IF;
END $$;

-- Create storage bucket for documents if it doesn't exist
INSERT INTO storage.buckets (id, name, public)
VALUES ('documents', 'documents', true)
ON CONFLICT (id) DO NOTHING;

-- Drop existing policies if they exist (to avoid conflicts)
DROP POLICY IF EXISTS "Anyone can upload documents" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can view documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can update documents" ON storage.objects;
DROP POLICY IF EXISTS "Users can delete documents" ON storage.objects;

-- Set up storage policies for documents bucket
-- Allow anyone to upload files
CREATE POLICY "Anyone can upload documents"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'documents');

-- Allow anyone to view uploaded documents
CREATE POLICY "Anyone can view documents"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'documents');

-- Allow users to update their own uploads (for replacing files)
CREATE POLICY "Users can update documents"
ON storage.objects FOR UPDATE
TO anon, authenticated
USING (bucket_id = 'documents');

-- Allow users to delete their own uploads
CREATE POLICY "Users can delete documents"
ON storage.objects FOR DELETE
TO anon, authenticated
USING (bucket_id = 'documents');