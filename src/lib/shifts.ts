import { supabase } from './supabase';

export interface Shift {
  id: string;
  title: string;
  location: string;
  facilityName: string;
  startTime: string;
  endTime: string;
  hourlyRate: number;
  sector: string;
  requirements: string[];
  urgency: 'low' | 'medium' | 'high';
  description?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
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

export async function getShifts(filters?: {
  sector?: string;
  urgency?: string;
  location?: string;
}) {
  let query = supabase
    .from('shifts')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: false });

  if (filters?.sector) {
    query = query.eq('sector', filters.sector);
  }

  if (filters?.urgency) {
    query = query.eq('urgency', filters.urgency);
  }

  if (filters?.location) {
    query = query.ilike('location', `%${filters.location}%`);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching shifts:', error);
    throw error;
  }

  return transformKeys(data) as Shift[];
}

export async function getShiftById(id: string) {
  const { data, error } = await supabase
    .from('shifts')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching shift:', error);
    throw error;
  }

  return transformKeys(data) as Shift;
}

export async function createShift(shiftData: Omit<Shift, 'id' | 'createdAt' | 'updatedAt'>) {
  const snakeData = transformKeysToSnake(shiftData);
  
  const { data, error } = await supabase
    .from('shifts')
    .insert([snakeData])
    .select()
    .single();

  if (error) {
    console.error('Error creating shift:', error);
    throw error;
  }

  return transformKeys(data) as Shift;
}

export async function updateShift(id: string, shiftData: Partial<Omit<Shift, 'id' | 'createdAt' | 'updatedAt'>>) {
  const snakeData = transformKeysToSnake(shiftData);
  
  const { data, error } = await supabase
    .from('shifts')
    .update(snakeData)
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating shift:', error);
    throw error;
  }

  return transformKeys(data) as Shift;
}

export async function deleteShift(id: string) {
  const { error } = await supabase
    .from('shifts')
    .delete()
    .eq('id', id);

  if (error) {
    console.error('Error deleting shift:', error);
    throw error;
  }
}

export async function getAllShifts() {
  const { data, error } = await supabase
    .from('shifts')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching all shifts:', error);
    throw error;
  }

  return transformKeys(data) as Shift[];
}