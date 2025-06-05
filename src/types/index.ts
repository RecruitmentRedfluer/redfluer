export interface NavigationItem {
  title: string;
  path: string;
}

export interface JobPosting {
  id: string;
  title: string;
  location: string;
  contract_type: 'permanent' | 'temporary' | 'contract';
  role: 'nurse' | 'carer' | 'healthcare-assistant' | 'doctor' | 'admin' | 'other';
  salary: string;
  description: string;
  posted_date: string;
  expires_at?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  videoUrl: string;
  imageUrl: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl: string;
  slug: string;
}

export interface StatItem {
  value: string;
  label: string;
}