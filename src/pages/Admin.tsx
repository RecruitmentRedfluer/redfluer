import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Button from '../components/ui/Button';
import { Plus, Edit, Trash2, Eye, EyeOff } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  location: string;
  contract_type: string;
  role: string;
  salary: string;
  description: string;
  posted_date: string;
  expires_at?: string;
  is_active: boolean;
}

interface Shift {
  id: string;
  title: string;
  location: string;
  facility_name: string;
  start_time: string;
  end_time: string;
  hourly_rate: number;
  sector: string;
  requirements: string[];
  urgency: string;
  description?: string;
  is_active: boolean;
}

interface Skill {
  id: string;
  name: string;
  category: string;
  description?: string;
  duration?: string;
  provider?: string;
  earns_premium: boolean;
  premium_rate?: string;
  is_active: boolean;
}

interface CareerPath {
  id: string;
  title: string;
  current_role: string;
  target_role: string;
  salary_increase: string;
  required_skills: string[];
  time_to_complete: string;
  description?: string;
  is_active: boolean;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState<'jobs' | 'shifts' | 'skills' | 'paths'>('jobs');
  
  // Data states
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [submitMessage, setSubmitMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);
  
  // Form data states
  const [jobFormData, setJobFormData] = useState({
    title: '',
    location: '',
    contract_type: 'permanent',
    role: 'nurse',
    salary: '',
    description: '',
    expires_at: '',
    is_active: true
  });

  const [shiftFormData, setShiftFormData] = useState({
    title: '',
    location: '',
    facility_name: '',
    start_time: '',
    end_time: '',
    hourly_rate: '',
    sector: 'healthcare',
    requirements: [] as string[],
    urgency: 'medium',
    description: '',
    is_active: true
  });

  const [skillFormData, setSkillFormData] = useState({
    name: '',
    category: '',
    description: '',
    duration: '',
    provider: '',
    earns_premium: false,
    premium_rate: '',
    is_active: true
  });

  const [pathFormData, setPathFormData] = useState({
    title: '',
    current_role: '',
    target_role: '',
    salary_increase: '',
    required_skills: [] as string[],
    time_to_complete: '',
    description: '',
    is_active: true
  });

  const ADMIN_PASSWORD = 'redfluer2024admin';

  useEffect(() => {
    if (isAuthenticated) {
      loadAllData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const loadAllData = async () => {
    setIsLoading(true);
    try {
      const [jobsData, shiftsData, skillsData, pathsData] = await Promise.all([
        supabase.from('job_postings').select('*').order('posted_date', { ascending: false }),
        supabase.from('shifts').select('*').order('created_at', { ascending: false }),
        supabase.from('skills').select('*').order('category', { ascending: true }),
        supabase.from('career_paths').select('*').order('created_at', { ascending: false })
      ]);

      if (jobsData.error) throw jobsData.error;
      if (shiftsData.error) throw shiftsData.error;
      if (skillsData.error) throw skillsData.error;
      if (pathsData.error) throw pathsData.error;

      setJobs(jobsData.data || []);
      setShifts(shiftsData.data || []);
      setSkills(skillsData.data || []);
      setCareerPaths(pathsData.data || []);
    } catch (error) {
      console.error('Error loading data:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to load data. Please refresh the page.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddNewClick = () => {
    console.log('Add New button clicked for tab:', activeTab);
    setShowForm(true);
    setEditingItem(null);
    resetForm();
    setSubmitMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted for tab:', activeTab);
    setIsLoading(true);
    setSubmitMessage(null);

    try {
      let result;
      
      if (activeTab === 'jobs') {
        console.log('Submitting job data:', jobFormData);
        if (editingItem) {
          result = await supabase
            .from('job_postings')
            .update({
              ...jobFormData,
              expires_at: jobFormData.expires_at || null
            })
            .eq('id', editingItem.id);
        } else {
          result = await supabase
            .from('job_postings')
            .insert([{
              ...jobFormData,
              expires_at: jobFormData.expires_at || null
            }]);
        }
      } else if (activeTab === 'shifts') {
        console.log('Submitting shift data:', shiftFormData);
        const shiftData = {
          ...shiftFormData,
          hourly_rate: parseFloat(shiftFormData.hourly_rate),
          requirements: shiftFormData.requirements.filter(req => req.trim() !== '')
        };
        
        if (editingItem) {
          result = await supabase
            .from('shifts')
            .update(shiftData)
            .eq('id', editingItem.id);
        } else {
          result = await supabase
            .from('shifts')
            .insert([shiftData]);
        }
      } else if (activeTab === 'skills') {
        console.log('Submitting skill data:', skillFormData);
        if (editingItem) {
          result = await supabase
            .from('skills')
            .update(skillFormData)
            .eq('id', editingItem.id);
        } else {
          result = await supabase
            .from('skills')
            .insert([skillFormData]);
        }
      } else if (activeTab === 'paths') {
        console.log('Submitting career path data:', pathFormData);
        const pathData = {
          ...pathFormData,
          required_skills: pathFormData.required_skills.filter(skill => skill.trim() !== '')
        };
        
        if (editingItem) {
          result = await supabase
            .from('career_paths')
            .update(pathData)
            .eq('id', editingItem.id);
        } else {
          result = await supabase
            .from('career_paths')
            .insert([pathData]);
        }
      }

      if (result?.error) {
        console.error('Database error:', result.error);
        throw result.error;
      }

      console.log('Successfully saved:', result);
      setSubmitMessage({
        type: 'success',
        text: `${activeTab.slice(0, -1)} ${editingItem ? 'updated' : 'created'} successfully!`
      });
      
      resetForm();
      await loadAllData();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error saving:', error);
      setSubmitMessage({
        type: 'error',
        text: `Failed to save ${activeTab.slice(0, -1)}. Please check all required fields and try again.`
      });
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setJobFormData({
      title: '',
      location: '',
      contract_type: 'permanent',
      role: 'nurse',
      salary: '',
      description: '',
      expires_at: '',
      is_active: true
    });
    setShiftFormData({
      title: '',
      location: '',
      facility_name: '',
      start_time: '',
      end_time: '',
      hourly_rate: '',
      sector: 'healthcare',
      requirements: [],
      urgency: 'medium',
      description: '',
      is_active: true
    });
    setSkillFormData({
      name: '',
      category: '',
      description: '',
      duration: '',
      provider: '',
      earns_premium: false,
      premium_rate: '',
      is_active: true
    });
    setPathFormData({
      title: '',
      current_role: '',
      target_role: '',
      salary_increase: '',
      required_skills: [],
      time_to_complete: '',
      description: '',
      is_active: true
    });
    setEditingItem(null);
    setShowForm(false);
    setSubmitMessage(null);
  };

  const handleEdit = (item: any) => {
    console.log('Editing item:', item);
    setEditingItem(item);
    
    if (activeTab === 'jobs') {
      setJobFormData({
        title: item.title,
        location: item.location,
        contract_type: item.contract_type,
        role: item.role,
        salary: item.salary,
        description: item.description,
        expires_at: item.expires_at ? item.expires_at.split('T')[0] : '',
        is_active: item.is_active
      });
    } else if (activeTab === 'shifts') {
      setShiftFormData({
        title: item.title,
        location: item.location,
        facility_name: item.facility_name,
        start_time: item.start_time,
        end_time: item.end_time,
        hourly_rate: item.hourly_rate.toString(),
        sector: item.sector,
        requirements: item.requirements || [],
        urgency: item.urgency,
        description: item.description || '',
        is_active: item.is_active
      });
    } else if (activeTab === 'skills') {
      setSkillFormData({
        name: item.name,
        category: item.category,
        description: item.description || '',
        duration: item.duration || '',
        provider: item.provider || '',
        earns_premium: item.earns_premium,
        premium_rate: item.premium_rate || '',
        is_active: item.is_active
      });
    } else if (activeTab === 'paths') {
      setPathFormData({
        title: item.title,
        current_role: item.current_role,
        target_role: item.target_role,
        salary_increase: item.salary_increase,
        required_skills: item.required_skills || [],
        time_to_complete: item.time_to_complete,
        description: item.description || '',
        is_active: item.is_active
      });
    }
    
    setShowForm(true);
    setSubmitMessage(null);
  };

  const handleDelete = async (id: string, table: string) => {
    if (!confirm(`Are you sure you want to delete this ${activeTab.slice(0, -1)}?`)) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from(table)
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      setSubmitMessage({
        type: 'success',
        text: `${activeTab.slice(0, -1)} deleted successfully!`
      });
      
      await loadAllData();
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setSubmitMessage(null);
      }, 3000);
    } catch (error) {
      console.error('Error deleting:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to delete item'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const toggleStatus = async (item: any, table: string) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from(table)
        .update({ is_active: !item.is_active })
        .eq('id', item.id);

      if (error) throw error;
      await loadAllData();
    } catch (error) {
      console.error('Error updating status:', error);
      setSubmitMessage({
        type: 'error',
        text: 'Failed to update status'
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-primary-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                required
              />
            </div>
            <Button type="submit" variant="primary" size="md" fullWidth>
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }

  const getCurrentData = () => {
    switch (activeTab) {
      case 'jobs': return jobs;
      case 'shifts': return shifts;
      case 'skills': return skills;
      case 'paths': return careerPaths;
      default: return [];
    }
  };

  const getCurrentTable = () => {
    switch (activeTab) {
      case 'jobs': return 'job_postings';
      case 'shifts': return 'shifts';
      case 'skills': return 'skills';
      case 'paths': return 'career_paths';
      default: return '';
    }
  };

  const getTabLabel = () => {
    switch (activeTab) {
      case 'jobs': return 'Job';
      case 'shifts': return 'Shift';
      case 'skills': return 'Skill';
      case 'paths': return 'Career Path';
      default: return 'Item';
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-900">Admin Dashboard</h1>
            <div className="flex gap-4">
              <Button
                onClick={handleAddNewClick}
                variant="primary"
                size="md"
                disabled={isLoading}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New {getTabLabel()}
              </Button>
              <Button
                onClick={() => setIsAuthenticated(false)}
                variant="outline"
                size="md"
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Global Messages */}
        {submitMessage && (
          <div className={`mb-6 p-4 rounded-md ${
            submitMessage.type === 'success' ? 'bg-success-100 text-success-800' : 'bg-error-100 text-error-800'
          }`}>
            {submitMessage.text}
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          {[
            { key: 'jobs', label: 'Jobs', count: jobs.length },
            { key: 'shifts', label: 'Shifts', count: shifts.length },
            { key: 'skills', label: 'Skills', count: skills.length },
            { key: 'paths', label: 'Career Paths', count: careerPaths.length }
          ].map(tab => (
            <button
              key={tab.key}
              onClick={() => {
                console.log('Switching to tab:', tab.key);
                setActiveTab(tab.key as any);
                setShowForm(false);
                resetForm();
              }}
              className={`px-6 py-3 font-medium text-sm border-b-2 ${
                activeTab === tab.key
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.label} ({tab.count})
            </button>
          ))}
        </div>

        {/* Forms */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-primary-900 mb-4">
              {editingItem ? 'Edit' : 'Add New'} {getTabLabel()}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Job Form */}
              {activeTab === 'jobs' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                      <input
                        type="text"
                        value={jobFormData.title}
                        onChange={(e) => setJobFormData({...jobFormData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                      <input
                        type="text"
                        value={jobFormData.location}
                        onChange={(e) => setJobFormData({...jobFormData, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Contract Type *</label>
                      <select
                        value={jobFormData.contract_type}
                        onChange={(e) => setJobFormData({...jobFormData, contract_type: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="permanent">Permanent</option>
                        <option value="temporary">Temporary</option>
                        <option value="contract">Contract</option>
                        <option value="shift">Shift Work</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Role *</label>
                      <select
                        value={jobFormData.role}
                        onChange={(e) => setJobFormData({...jobFormData, role: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="nurse">Registered General Nurse (RGN/RN)</option>
                        <option value="healthcare-assistant">Healthcare Assistant (HCA)</option>
                        <option value="senior-care-worker">Senior Care Support Worker</option>
                        <option value="support-worker">Support Worker</option>
                        <option value="team-leader">Team Leader</option>
                        <option value="mental-health-nurse">Mental Health Nurse</option>
                        <option value="mental-health-assistant">Mental Health Assistant</option>
                        <option value="security-officer">Security Officer</option>
                        <option value="cleaner">Cleaner</option>
                        <option value="admin">Administrative</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary *</label>
                      <input
                        type="text"
                        value={jobFormData.salary}
                        onChange={(e) => setJobFormData({...jobFormData, salary: e.target.value})}
                        placeholder="e.g., £25,000 - £30,000 or £15.50/hour"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Expires At</label>
                      <input
                        type="date"
                        value={jobFormData.expires_at}
                        onChange={(e) => setJobFormData({...jobFormData, expires_at: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                    <textarea
                      value={jobFormData.description}
                      onChange={(e) => setJobFormData({...jobFormData, description: e.target.value})}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="job_is_active"
                      checked={jobFormData.is_active}
                      onChange={(e) => setJobFormData({...jobFormData, is_active: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="job_is_active" className="text-sm font-medium text-gray-700">
                      Job is active
                    </label>
                  </div>
                </>
              )}

              {/* Shift Form */}
              {activeTab === 'shifts' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Shift Title *</label>
                      <input
                        type="text"
                        value={shiftFormData.title}
                        onChange={(e) => setShiftFormData({...shiftFormData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                      <input
                        type="text"
                        value={shiftFormData.location}
                        onChange={(e) => setShiftFormData({...shiftFormData, location: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Facility Name *</label>
                      <input
                        type="text"
                        value={shiftFormData.facility_name}
                        onChange={(e) => setShiftFormData({...shiftFormData, facility_name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate *</label>
                      <input
                        type="number"
                        step="0.01"
                        value={shiftFormData.hourly_rate}
                        onChange={(e) => setShiftFormData({...shiftFormData, hourly_rate: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                      <input
                        type="datetime-local"
                        value={shiftFormData.start_time}
                        onChange={(e) => setShiftFormData({...shiftFormData, start_time: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Time *</label>
                      <input
                        type="datetime-local"
                        value={shiftFormData.end_time}
                        onChange={(e) => setShiftFormData({...shiftFormData, end_time: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Sector *</label>
                      <select
                        value={shiftFormData.sector}
                        onChange={(e) => setShiftFormData({...shiftFormData, sector: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="healthcare">Healthcare</option>
                        <option value="mental-health">Mental Health</option>
                        <option value="learning-disabilities">Learning Disabilities</option>
                        <option value="dementia">Specialist Dementia</option>
                        <option value="security">Security</option>
                        <option value="cleaning">Cleaning</option>
                        <option value="admin">Administrative</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Urgency *</label>
                      <select
                        value={shiftFormData.urgency}
                        onChange={(e) => setShiftFormData({...shiftFormData, urgency: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={shiftFormData.description}
                      onChange={(e) => setShiftFormData({...shiftFormData, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirements (one per line)</label>
                    <textarea
                      value={shiftFormData.requirements.join('\n')}
                      onChange={(e) => setShiftFormData({...shiftFormData, requirements: e.target.value.split('\n')})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="DBS Check&#10;Healthcare Experience&#10;Valid Driving License"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="shift_is_active"
                      checked={shiftFormData.is_active}
                      onChange={(e) => setShiftFormData({...shiftFormData, is_active: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="shift_is_active" className="text-sm font-medium text-gray-700">
                      Shift is active
                    </label>
                  </div>
                </>
              )}

              {/* Skill Form */}
              {activeTab === 'skills' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Skill Name *</label>
                      <input
                        type="text"
                        value={skillFormData.name}
                        onChange={(e) => setSkillFormData({...skillFormData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                      <input
                        type="text"
                        value={skillFormData.category}
                        onChange={(e) => setSkillFormData({...skillFormData, category: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Duration</label>
                      <input
                        type="text"
                        value={skillFormData.duration}
                        onChange={(e) => setSkillFormData({...skillFormData, duration: e.target.value})}
                        placeholder="e.g., 2 days, 1 week"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Provider</label>
                      <input
                        type="text"
                        value={skillFormData.provider}
                        onChange={(e) => setSkillFormData({...skillFormData, provider: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={skillFormData.description}
                      onChange={(e) => setSkillFormData({...skillFormData, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="earns_premium"
                        checked={skillFormData.earns_premium}
                        onChange={(e) => setSkillFormData({...skillFormData, earns_premium: e.target.checked})}
                        className="mr-2"
                      />
                      <label htmlFor="earns_premium" className="text-sm font-medium text-gray-700">
                        Earns Premium
                      </label>
                    </div>
                    {skillFormData.earns_premium && (
                      <div>
                        <input
                          type="text"
                          value={skillFormData.premium_rate}
                          onChange={(e) => setSkillFormData({...skillFormData, premium_rate: e.target.value})}
                          placeholder="e.g., +£2.50/hour"
                          className="px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill_is_active"
                      checked={skillFormData.is_active}
                      onChange={(e) => setSkillFormData({...skillFormData, is_active: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="skill_is_active" className="text-sm font-medium text-gray-700">
                      Skill is active
                    </label>
                  </div>
                </>
              )}

              {/* Career Path Form */}
              {activeTab === 'paths' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Path Title *</label>
                      <input
                        type="text"
                        value={pathFormData.title}
                        onChange={(e) => setPathFormData({...pathFormData, title: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Time to Complete *</label>
                      <input
                        type="text"
                        value={pathFormData.time_to_complete}
                        onChange={(e) => setPathFormData({...pathFormData, time_to_complete: e.target.value})}
                        placeholder="e.g., 3-6 months"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Role *</label>
                      <input
                        type="text"
                        value={pathFormData.current_role}
                        onChange={(e) => setPathFormData({...pathFormData, current_role: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Target Role *</label>
                      <input
                        type="text"
                        value={pathFormData.target_role}
                        onChange={(e) => setPathFormData({...pathFormData, target_role: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary Increase *</label>
                      <input
                        type="text"
                        value={pathFormData.salary_increase}
                        onChange={(e) => setPathFormData({...pathFormData, salary_increase: e.target.value})}
                        placeholder="e.g., +£4,000 - £6,000 annually"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={pathFormData.description}
                      onChange={(e) => setPathFormData({...pathFormData, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills (one per line)</label>
                    <textarea
                      value={pathFormData.required_skills.join('\n')}
                      onChange={(e) => setPathFormData({...pathFormData, required_skills: e.target.value.split('\n')})}
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Leadership Training&#10;Medication Administration&#10;Safeguarding Level 2"
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="path_is_active"
                      checked={pathFormData.is_active}
                      onChange={(e) => setPathFormData({...pathFormData, is_active: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="path_is_active" className="text-sm font-medium text-gray-700">
                      Career path is active
                    </label>
                  </div>
                </>
              )}

              <div className="flex gap-4">
                <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                  {isLoading ? 'Saving...' : (editingItem ? 'Update' : 'Create')}
                </Button>
                <Button
                  type="button"
                  onClick={resetForm}
                  variant="outline"
                  size="md"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Data List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-primary-900">
              All {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} ({getCurrentData().length})
            </h2>
          </div>
          
          {isLoading && !showForm ? (
            <div className="p-6 text-center">Loading...</div>
          ) : getCurrentData().length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No {activeTab} found. Click "Add New {getTabLabel()}" to create one.
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {getCurrentData().map((item: any) => (
                <div key={item.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-primary-900">
                          {item.title || item.name}
                        </h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.is_active ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {item.is_active ? 'Active' : 'Inactive'}
                        </span>
                        {activeTab === 'jobs' && (
                          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                            {item.contract_type}
                          </span>
                        )}
                        {activeTab === 'shifts' && (
                          <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                            £{item.hourly_rate}/hour
                          </span>
                        )}
                        {activeTab === 'skills' && item.earns_premium && (
                          <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                            Premium: {item.premium_rate}
                          </span>
                        )}
                      </div>
                      <div className="text-gray-600 mb-2 text-sm">
                        {activeTab === 'jobs' && (
                          <>📍 {item.location} • 💰 {item.salary} • 👤 {item.role}</>
                        )}
                        {activeTab === 'shifts' && (
                          <>📍 {item.location} • 🏢 {item.facility_name} • ⚡ {item.urgency} priority</>
                        )}
                        {activeTab === 'skills' && (
                          <>📚 {item.category} • ⏱️ {item.duration} • 🏢 {item.provider}</>
                        )}
                        {activeTab === 'paths' && (
                          <>👤 {item.current_role} → {item.target_role} • 💰 {item.salary_increase}</>
                        )}
                      </div>
                      <p className="text-gray-700 text-sm mb-2">
                        {(item.description || '').substring(0, 150)}
                        {(item.description || '').length > 150 ? '...' : ''}
                      </p>
                      <div className="text-xs text-gray-500">
                        Created: {new Date(item.created_at || item.posted_date).toLocaleDateString()}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => toggleStatus(item, getCurrentTable())}
                        className="p-2 text-gray-600 hover:text-primary-600"
                        title={item.is_active ? 'Deactivate' : 'Activate'}
                        disabled={isLoading}
                      >
                        {item.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="p-2 text-gray-600 hover:text-primary-600"
                        title="Edit"
                        disabled={isLoading}
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item.id, getCurrentTable())}
                        className="p-2 text-gray-600 hover:text-error-600"
                        title="Delete"
                        disabled={isLoading}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;