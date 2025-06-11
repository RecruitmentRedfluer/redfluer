/*
  # Create skills and career development system

  1. New Tables
    - `skills` - Available skills and certifications with premium rates
    - `career_paths` - Career advancement pathways
    - `user_skills` - User progress tracking for skills

  2. Security
    - Enable RLS on all tables
    - Add policies for public access and admin management
*/

-- Skills table
CREATE TABLE IF NOT EXISTS skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  category text NOT NULL,
  description text,
  duration text,
  provider text,
  earns_premium boolean DEFAULT false,
  premium_rate text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE skills ENABLE ROW LEVEL SECURITY;

-- Career paths table (using quoted column names to avoid reserved keywords)
CREATE TABLE IF NOT EXISTS career_paths (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  "current_role" text NOT NULL,
  "target_role" text NOT NULL,
  salary_increase text NOT NULL,
  required_skills text[] DEFAULT '{}',
  time_to_complete text NOT NULL,
  description text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE career_paths ENABLE ROW LEVEL SECURITY;

-- User skills tracking table
CREATE TABLE IF NOT EXISTS user_skills (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  skill_id uuid REFERENCES skills(id) ON DELETE CASCADE,
  user_email text NOT NULL,
  status text DEFAULT 'available',
  progress_percentage integer DEFAULT 0,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE user_skills ENABLE ROW LEVEL SECURITY;

-- Skills policies
CREATE POLICY "Anyone can view active skills"
  ON skills
  FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage skills"
  ON skills
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can view all skills"
  ON skills
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can insert skills"
  ON skills
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can update skills"
  ON skills
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete skills"
  ON skills
  FOR DELETE
  TO anon
  USING (true);

-- Career paths policies
CREATE POLICY "Anyone can view active career paths"
  ON career_paths
  FOR SELECT
  TO anon
  USING (is_active = true);

CREATE POLICY "Authenticated users can manage career paths"
  ON career_paths
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can view all career paths"
  ON career_paths
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Admin can insert career paths"
  ON career_paths
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Admin can update career paths"
  ON career_paths
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Admin can delete career paths"
  ON career_paths
  FOR DELETE
  TO anon
  USING (true);

-- User skills policies
CREATE POLICY "Anyone can insert user skills"
  ON user_skills
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Anyone can view user skills"
  ON user_skills
  FOR SELECT
  TO anon
  USING (true);

CREATE POLICY "Anyone can update user skills"
  ON user_skills
  FOR UPDATE
  TO anon
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can manage user skills"
  ON user_skills
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Update triggers
CREATE TRIGGER update_skills_updated_at
  BEFORE UPDATE ON skills
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_career_paths_updated_at
  BEFORE UPDATE ON career_paths
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_skills_updated_at
  BEFORE UPDATE ON user_skills
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Insert sample skills data
INSERT INTO skills (name, category, description, duration, provider, earns_premium, premium_rate) VALUES
('Mental Health First Aid', 'Mental Health', 'Certified training in mental health first aid and crisis intervention', '2 days', 'Mental Health First Aid England', true, '+£3.50/hour'),
('Dementia Care Specialist', 'Specialist Care', 'Advanced dementia care techniques and person-centered approaches', '5 days', 'Alzheimer''s Society', true, '+£4.00/hour'),
('Learning Disability Awareness', 'Learning Disabilities', 'Understanding and supporting individuals with learning disabilities', '1 day', 'Mencap Training', true, '+£2.50/hour'),
('Medication Administration', 'Clinical Skills', 'Safe medication administration and management', '3 days', 'Skills for Care', true, '+£2.00/hour'),
('Safeguarding Adults', 'Safeguarding', 'Essential safeguarding training for adult care settings', '1 day', 'Local Authority', false, null),
('Leadership in Healthcare', 'Leadership', 'Leadership skills for healthcare professionals', '3 days', 'NHS Leadership Academy', true, '+£3.00/hour'),
('Positive Behaviour Support', 'Behavioural Support', 'Evidence-based approaches to supporting challenging behaviour', '2 days', 'BILD Training', true, '+£2.75/hour'),
('Person-Centered Planning', 'Care Planning', 'Developing person-centered care plans and support strategies', '2 days', 'Skills for Care', true, '+£2.25/hour'),
('Risk Assessment', 'Health & Safety', 'Comprehensive risk assessment in healthcare environments', '1 day', 'RoSPA', true, '+£1.50/hour'),
('CBT Foundation', 'Mental Health', 'Foundation course in Cognitive Behavioural Therapy techniques', '10 days', 'BABCP', true, '+£5.00/hour');

-- Insert sample career paths data
INSERT INTO career_paths (title, "current_role", "target_role", salary_increase, required_skills, time_to_complete, description) VALUES
('Healthcare Assistant to Senior Care Worker', 'Healthcare Assistant', 'Senior Care Worker / Team Leader', '+£4,000 - £6,000 annually', ARRAY['Leadership in Healthcare', 'Medication Administration', 'Safeguarding Adults'], '3-6 months', 'Advance your career from Healthcare Assistant to a senior leadership role with additional responsibilities and higher pay.'),
('General Nurse to Mental Health Specialist', 'Registered General Nurse', 'Mental Health Specialist Nurse', '+£5,000 - £8,000 annually', ARRAY['Mental Health First Aid', 'CBT Foundation', 'Risk Assessment'], '6-12 months', 'Specialise in mental health nursing with advanced training and significantly higher earning potential.'),
('Support Worker to Learning Disability Specialist', 'Support Worker', 'Learning Disability Specialist', '+£3,000 - £5,000 annually', ARRAY['Learning Disability Awareness', 'Positive Behaviour Support', 'Person-Centered Planning'], '4-8 months', 'Become a specialist in learning disability support with enhanced skills and better compensation.'),
('Care Assistant to Dementia Care Specialist', 'Care Assistant', 'Dementia Care Specialist', '+£3,500 - £5,500 annually', ARRAY['Dementia Care Specialist', 'Person-Centered Planning', 'Safeguarding Adults'], '4-6 months', 'Specialize in dementia care with advanced training in person-centered approaches and specialised care techniques.');