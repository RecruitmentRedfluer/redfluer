import { supabase } from './supabase';
import type { JobPosting } from '../types';

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

export async function getJobs(filters?: {
  keyword?: string;
  location?: string;
  role?: string;
  contractType?: string;
}) {
  let query = supabase
    .from('job_postings')
    .select('*')
    .eq('is_active', true)
    .order('posted_date', { ascending: false });

  if (filters?.keyword) {
    query = query.or(`title.ilike.%${filters.keyword}%,description.ilike.%${filters.keyword}%`);
  }

  if (filters?.location) {
    query = query.eq('location', filters.location);
  }

  if (filters?.role) {
    query = query.eq('role', filters.role);
  }

  if (filters?.contractType) {
    query = query.eq('contract_type', filters.contractType);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }

  return transformKeys(data) as JobPosting[];
}

export async function getJobById(id: string) {
  const { data, error } = await supabase
    .from('job_postings')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching job:', error);
    throw error;
  }

  return transformKeys(data) as JobPosting;
}