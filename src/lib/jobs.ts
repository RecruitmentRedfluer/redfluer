import { supabase } from './supabase';
import type { JobPosting } from '../types';

export async function getJobs(filters?: {
  keyword?: string;
  location?: string;
  role?: string;
  contract_type?: string;
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

  if (filters?.contract_type) {
    query = query.eq('contract_type', filters.contract_type);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching jobs:', error);
    throw error;
  }

  return data as JobPosting[];
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

  return data as JobPosting;
}