import { supabase } from './supabase';

export interface Skill {
  id: string;
  name: string;
  category: string;
  description?: string;
  duration?: string;
  provider?: string;
  earnsPremium: boolean;
  premiumRate?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CareerPath {
  id: string;
  title: string;
  currentRole: string;
  targetRole: string;
  salaryIncrease: string;
  requiredSkills: string[];
  timeToComplete: string;
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface UserSkill {
  id: string;
  skillId: string;
  userEmail: string;
  status: 'available' | 'in-progress' | 'completed';
  progressPercentage: number;
  startedAt?: string;
  completedAt?: string;
  createdAt: string;
  updatedAt: string;
  skill?: Skill;
}

// Helper function to convert snake_case to camelCase
function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
}

// Helper function to transform object keys from snake_case to camelCase
function transformKeys(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(transformKeys);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const camelKey = toCamelCase(key);
      acc[camelKey] = transformKeys(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
}

// Helper function to convert camelCase to snake_case
function toSnakeCase(str: string): string {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
}

// Helper function to transform object keys from camelCase to snake_case
function transformKeysToSnake(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(transformKeysToSnake);
  }
  if (obj !== null && typeof obj === 'object') {
    return Object.keys(obj).reduce((acc, key) => {
      const snakeKey = toSnakeCase(key);
      acc[snakeKey] = transformKeysToSnake(obj[key]);
      return acc;
    }, {} as any);
  }
  return obj;
}

// Skills functions
export async function getSkills(filters?: {
  category?: string;
  earnsPremium?: boolean;
}) {
  let query = supabase
    .from('skills')
    .select('*')
    .eq('is_active', true)
    .order('category', { ascending: true });

  if (filters?.category) {
    query = query.eq('category', filters.category);
  }

  if (filters?.earnsPremium !== undefined) {
    query = query.eq('earns_premium', filters.earnsPremium);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }

  return transformKeys(data) as Skill[];
}

export async function getSkillById(id: string) {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching skill:', error);
    throw error;
  }

  return transformKeys(data) as Skill;
}

export async function createSkill(skillData: Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>) {
  const snakeData = transformKeysToSnake(skillData);
  
  const { data, error } = await supabase
    .from('skills')
    .insert([snakeData])
    .select()
    .single();

  if (error) {
    console.error('Error creating skill:', error);
    throw error;
  }

  return transformKeys(data) as Skill;
}

export async function updateSkill(id: string, skillData: Partial<Omit<Skill, 'id' | 'createdAt' | 'updatedAt'>>) {
  const snakeData = transformKeysToSnake(skillData);
  
  const { data, error } = await supabase
    .from('skills')
    .update(snakeData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating skill:', error);
    throw error;
  }

  return transformKeys(data) as Skill;
}

export async function deleteSkill(id: string) {
  const { error } = await supabase
    .from('skills')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting skill:', error);
    throw error;
  }
}

export async function getAllSkills() {
  const { data, error } = await supabase
    .from('skills')
    .select('*')
    .order('category', { ascending: true });

  if (error) {
    console.error('Error fetching all skills:', error);
    throw error;
  }

  return transformKeys(data) as Skill[];
}

// Career paths functions
export async function getCareerPaths() {
  const { data, error } = await supabase
    .from('career_paths')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching career paths:', error);
    throw error;
  }

  return transformKeys(data) as CareerPath[];
}

export async function getCareerPathById(id: string) {
  const { data, error } = await supabase
    .from('career_paths')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching career path:', error);
    throw error;
  }

  return transformKeys(data) as CareerPath;
}

export async function createCareerPath(pathData: Omit<CareerPath, 'id' | 'createdAt' | 'updatedAt'>) {
  const snakeData = transformKeysToSnake(pathData);
  
  const { data, error } = await supabase
    .from('career_paths')
    .insert([snakeData])
    .select()
    .single();

  if (error) {
    console.error('Error creating career path:', error);
    throw error;
  }

  return transformKeys(data) as CareerPath;
}

export async function updateCareerPath(id: string, pathData: Partial<Omit<CareerPath, 'id' | 'createdAt' | 'updatedAt'>>) {
  const snakeData = transformKeysToSnake(pathData);
  
  const { data, error } = await supabase
    .from('career_paths')
    .update(snakeData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating career path:', error);
    throw error;
  }

  return transformKeys(data) as CareerPath;
}

export async function deleteCareerPath(id: string) {
  const { error } = await supabase
    .from('career_paths')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting career path:', error);
    throw error;
  }
}

export async function getAllCareerPaths() {
  const { data, error } = await supabase
    .from('career_paths')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all career paths:', error);
    throw error;
  }

  return transformKeys(data) as CareerPath[];
}

// User skills functions
export async function getUserSkills(userEmail: string) {
  const { data, error } = await supabase
    .from('user_skills')
    .select(`
      *,
      skills (*)
    `)
    .eq('user_email', userEmail)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching user skills:', error);
    throw error;
  }

  return transformKeys(data) as UserSkill[];
}

export async function createUserSkill(userSkillData: Omit<UserSkill, 'id' | 'createdAt' | 'updatedAt' | 'skill'>) {
  const snakeData = transformKeysToSnake(userSkillData);
  
  const { data, error } = await supabase
    .from('user_skills')
    .insert([snakeData])
    .select()
    .single();

  if (error) {
    console.error('Error creating user skill:', error);
    throw error;
  }

  return transformKeys(data) as UserSkill;
}

export async function updateUserSkill(id: string, userSkillData: Partial<Omit<UserSkill, 'id' | 'createdAt' | 'updatedAt' | 'skill'>>) {
  const snakeData = transformKeysToSnake(userSkillData);
  
  const { data, error } = await supabase
    .from('user_skills')
    .update(snakeData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating user skill:', error);
    throw error;
  }

  return transformKeys(data) as UserSkill;
}