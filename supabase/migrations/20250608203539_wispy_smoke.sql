/*
  # Insert sample data for skills and career paths

  1. Sample Data
    - Insert 10 sample skills with various categories and premium rates
    - Insert 4 sample career paths showing advancement opportunities
  
  2. Safety
    - Uses WHERE NOT EXISTS to prevent duplicate data
    - Only inserts if data doesn't already exist
*/

-- Insert sample skills data (only if not already present)
INSERT INTO skills (name, category, description, duration, provider, earns_premium, premium_rate) 
SELECT * FROM (VALUES
  ('Mental Health First Aid', 'Mental Health', 'Certified training in mental health first aid and crisis intervention', '2 days', 'Mental Health First Aid England', true, '+£3.50/hour'),
  ('Dementia Care Specialist', 'Specialist Care', 'Advanced dementia care techniques and person-centered approaches', '5 days', 'Alzheimer''s Society', true, '+£4.00/hour'),
  ('Learning Disability Awareness', 'Learning Disabilities', 'Understanding and supporting individuals with learning disabilities', '1 day', 'Mencap Training', true, '+£2.50/hour'),
  ('Medication Administration', 'Clinical Skills', 'Safe medication administration and management', '3 days', 'Skills for Care', true, '+£2.00/hour'),
  ('Safeguarding Adults', 'Safeguarding', 'Essential safeguarding training for adult care settings', '1 day', 'Local Authority', false, null),
  ('Leadership in Healthcare', 'Leadership', 'Leadership skills for healthcare professionals', '3 days', 'NHS Leadership Academy', true, '+£3.00/hour'),
  ('Positive Behaviour Support', 'Behavioural Support', 'Evidence-based approaches to supporting challenging behaviour', '2 days', 'BILD Training', true, '+£2.75/hour'),
  ('Person-Centered Planning', 'Care Planning', 'Developing person-centered care plans and support strategies', '2 days', 'Skills for Care', true, '+£2.25/hour'),
  ('Risk Assessment', 'Health & Safety', 'Comprehensive risk assessment in healthcare environments', '1 day', 'RoSPA', true, '+£1.50/hour'),
  ('CBT Foundation', 'Mental Health', 'Foundation course in Cognitive Behavioural Therapy techniques', '10 days', 'BABCP', true, '+£5.00/hour')
) AS v(name, category, description, duration, provider, earns_premium, premium_rate)
WHERE NOT EXISTS (
  SELECT 1 FROM skills WHERE skills.name = v.name
);

-- Insert sample career paths data (only if not already present)
INSERT INTO career_paths (title, "current_role", "target_role", salary_increase, required_skills, time_to_complete, description)
SELECT * FROM (VALUES
  ('Healthcare Assistant to Senior Care Worker', 'Healthcare Assistant', 'Senior Care Worker / Team Leader', '+£4,000 - £6,000 annually', ARRAY['Leadership in Healthcare', 'Medication Administration', 'Safeguarding Adults'], '3-6 months', 'Advance your career from Healthcare Assistant to a senior leadership role with additional responsibilities and higher pay.'),
  ('General Nurse to Mental Health Specialist', 'Registered General Nurse', 'Mental Health Specialist Nurse', '+£5,000 - £8,000 annually', ARRAY['Mental Health First Aid', 'CBT Foundation', 'Risk Assessment'], '6-12 months', 'Specialise in mental health nursing with advanced training and significantly higher earning potential.'),
  ('Support Worker to Learning Disability Specialist', 'Support Worker', 'Learning Disability Specialist', '+£3,000 - £5,000 annually', ARRAY['Learning Disability Awareness', 'Positive Behaviour Support', 'Person-Centered Planning'], '4-8 months', 'Become a specialist in learning disability support with enhanced skills and better compensation.'),
  ('Care Assistant to Dementia Care Specialist', 'Care Assistant', 'Dementia Care Specialist', '+£3,500 - £5,500 annually', ARRAY['Dementia Care Specialist', 'Person-Centered Planning', 'Safeguarding Adults'], '4-6 months', 'Specialise in dementia care with advanced training in person-centered approaches and specialised care techniques.')
) AS v(title, "current_role", "target_role", salary_increase, required_skills, time_to_complete, description)
WHERE NOT EXISTS (
  SELECT 1 FROM career_paths WHERE career_paths.title = v.title
);