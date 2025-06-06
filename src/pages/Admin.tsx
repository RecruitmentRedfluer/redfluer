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

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    location: '',
    contract_type: 'permanent',
    role: 'nurse',
    salary: '',
    description: '',
    expires_at: '',
    is_active: true
  });

  const ADMIN_PASSWORD = 'redfluer2024admin'; // In production, this should be environment variable

  useEffect(() => {
    if (isAuthenticated) {
      loadJobs();
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

  const loadJobs = async () => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .order('posted_date', { ascending: false });

      if (error) throw error;
      setJobs(data || []);
    } catch (error) {
      console.error('Error loading jobs:', error);
      alert('Failed to load jobs');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingJob) {
        // Update existing job
        const { error } = await supabase
          .from('job_postings')
          .update({
            ...formData,
            expires_at: formData.expires_at || null
          })
          .eq('id', editingJob.id);

        if (error) throw error;
        alert('Job updated successfully!');
      } else {
        // Create new job
        const { error } = await supabase
          .from('job_postings')
          .insert([{
            ...formData,
            expires_at: formData.expires_at || null
          }]);

        if (error) throw error;
        alert('Job created successfully!');
      }

      // Reset form and reload jobs
      setFormData({
        title: '',
        location: '',
        contract_type: 'permanent',
        role: 'nurse',
        salary: '',
        description: '',
        expires_at: '',
        is_active: true
      });
      setEditingJob(null);
      setShowForm(false);
      loadJobs();
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job');
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (job: JobPosting) => {
    setEditingJob(job);
    setFormData({
      title: job.title,
      location: job.location,
      contract_type: job.contract_type,
      role: job.role,
      salary: job.salary,
      description: job.description,
      expires_at: job.expires_at ? job.expires_at.split('T')[0] : '',
      is_active: job.is_active
    });
    setShowForm(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this job?')) return;

    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('job_postings')
        .delete()
        .eq('id', id);

      if (error) throw error;
      alert('Job deleted successfully!');
      loadJobs();
    } catch (error) {
      console.error('Error deleting job:', error);
      alert('Failed to delete job');
    } finally {
      setIsLoading(false);
    }
  };

  const toggleJobStatus = async (job: JobPosting) => {
    setIsLoading(true);
    try {
      const { error } = await supabase
        .from('job_postings')
        .update({ is_active: !job.is_active })
        .eq('id', job.id);

      if (error) throw error;
      loadJobs();
    } catch (error) {
      console.error('Error updating job status:', error);
      alert('Failed to update job status');
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

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary-900">Job Management Admin</h1>
            <div className="flex gap-4">
              <Button
                onClick={() => {
                  setShowForm(!showForm);
                  setEditingJob(null);
                  setFormData({
                    title: '',
                    location: '',
                    contract_type: 'permanent',
                    role: 'nurse',
                    salary: '',
                    description: '',
                    expires_at: '',
                    is_active: true
                  });
                }}
                variant="primary"
                size="md"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New Job
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
        {/* Job Form */}
        {showForm && (
          <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <h2 className="text-xl font-semibold text-primary-900 mb-4">
              {editingJob ? 'Edit Job' : 'Add New Job'}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Job Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location *</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Contract Type *</label>
                  <select
                    value={formData.contract_type}
                    onChange={(e) => setFormData({...formData, contract_type: e.target.value})}
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
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
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
                    value={formData.salary}
                    onChange={(e) => setFormData({...formData, salary: e.target.value})}
                    placeholder="e.g., £25,000 - £30,000 or £15.50/hour"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expires At</label>
                  <input
                    type="date"
                    value={formData.expires_at}
                    onChange={(e) => setFormData({...formData, expires_at: e.target.value})}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  required
                />
              </div>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="is_active"
                  checked={formData.is_active}
                  onChange={(e) => setFormData({...formData, is_active: e.target.checked})}
                  className="mr-2"
                />
                <label htmlFor="is_active" className="text-sm font-medium text-gray-700">
                  Job is active
                </label>
              </div>
              <div className="flex gap-4">
                <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                  {isLoading ? 'Saving...' : (editingJob ? 'Update Job' : 'Create Job')}
                </Button>
                <Button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingJob(null);
                  }}
                  variant="outline"
                  size="md"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Jobs List */}
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-primary-900">All Jobs ({jobs.length})</h2>
          </div>
          
          {isLoading ? (
            <div className="p-6 text-center">Loading jobs...</div>
          ) : jobs.length === 0 ? (
            <div className="p-6 text-center text-gray-500">No jobs found</div>
          ) : (
            <div className="divide-y divide-gray-200">
              {jobs.map(job => (
                <div key={job.id} className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-primary-900">{job.title}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          job.is_active ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                        }`}>
                          {job.is_active ? 'Active' : 'Inactive'}
                        </span>
                        <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                          {job.contract_type}
                        </span>
                      </div>
                      <div className="text-gray-600 mb-2">
                        <span className="mr-4">📍 {job.location}</span>
                        <span className="mr-4">💰 {job.salary}</span>
                        <span>👤 {job.role.replace(/-/g, ' ')}</span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{job.description.substring(0, 150)}...</p>
                      <div className="text-xs text-gray-500">
                        Posted: {new Date(job.posted_date).toLocaleDateString()}
                        {job.expires_at && ` • Expires: ${new Date(job.expires_at).toLocaleDateString()}`}
                      </div>
                    </div>
                    <div className="flex gap-2 ml-4">
                      <button
                        onClick={() => toggleJobStatus(job)}
                        className="p-2 text-gray-600 hover:text-primary-600"
                        title={job.is_active ? 'Deactivate' : 'Activate'}
                      >
                        {job.is_active ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                      <button
                        onClick={() => handleEdit(job)}
                        className="p-2 text-gray-600 hover:text-primary-600"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(job.id)}
                        className="p-2 text-gray-600 hover:text-error-600"
                        title="Delete"
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