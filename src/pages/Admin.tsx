import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Button from '../components/ui/Button';
import { Plus, Edit, Trash2, Eye, EyeOff, Calendar, Clock, Award, BookOpen } from 'lucide-react';
import { getAllShifts, createShift, updateShift, deleteShift, type Shift } from '../lib/shifts';
import { getAllSkills, createSkill, updateSkill, deleteSkill, getAllCareerPaths, createCareerPath, updateCareerPath, deleteCareerPath, type Skill, type CareerPath } from '../lib/skills';

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
  const [activeTab, setActiveTab] = useState<'jobs' | 'shifts' | 'skills' | 'paths'>('jobs');
  
  // Jobs state
  const [jobs, setJobs] = useState<JobPosting[]>([]);
  const [showJobForm, setShowJobForm] = useState(false);
  const [editingJob, setEditingJob] = useState<JobPosting | null>(null);
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

  // Shifts state
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [showShiftForm, setShowShiftForm] = useState(false);
  const [editingShift, setEditingShift] = useState<Shift | null>(null);
  const [shiftFormData, setShiftFormData] = useState({
    title: '',
    location: '',
    facilityName: '',
    startTime: '',
    endTime: '',
    hourlyRate: '',
    sector: 'healthcare',
    requirements: [] as string[],
    urgency: 'medium' as 'low' | 'medium' | 'high',
    description: '',
    isActive: true
  });
  const [requirementInput, setRequirementInput] = useState('');

  // Skills state
  const [skills, setSkills] = useState<Skill[]>([]);
  const [showSkillForm, setShowSkillForm] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [skillFormData, setSkillFormData] = useState({
    name: '',
    category: '',
    description: '',
    duration: '',
    provider: '',
    earnsPremium: false,
    premiumRate: '',
    isActive: true
  });

  // Career paths state
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);
  const [showPathForm, setShowPathForm] = useState(false);
  const [editingPath, setEditingPath] = useState<CareerPath | null>(null);
  const [pathFormData, setPathFormData] = useState({
    title: '',
    currentRole: '',
    targetRole: '',
    salaryIncrease: '',
    requiredSkills: [] as string[],
    timeToComplete: '',
    description: '',
    isActive: true
  });
  const [skillInput, setSkillInput] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const ADMIN_PASSWORD = 'redfluer2024admin';

  useEffect(() => {
    if (isAuthenticated) {
      if (activeTab === 'jobs') {
        loadJobs();
      } else if (activeTab === 'shifts') {
        loadShifts();
      } else if (activeTab === 'skills') {
        loadSkills();
      } else if (activeTab === 'paths') {
        loadCareerPaths();
      }
    }
  }, [isAuthenticated, activeTab]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
    } else {
      alert('Invalid password');
    }
  };

  const handleAddNewClick = () => {
    if (activeTab === 'jobs') {
      setShowJobForm(true);
      setShowShiftForm(false);
      setShowSkillForm(false);
      setShowPathForm(false);
      resetJobForm();
    } else if (activeTab === 'shifts') {
      setShowShiftForm(true);
      setShowJobForm(false);
      setShowSkillForm(false);
      setShowPathForm(false);
      resetShiftForm();
    } else if (activeTab === 'skills') {
      setShowSkillForm(true);
      setShowJobForm(false);
      setShowShiftForm(false);
      setShowPathForm(false);
      resetSkillForm();
    } else if (activeTab === 'paths') {
      setShowPathForm(true);
      setShowJobForm(false);
      setShowShiftForm(false);
      setShowSkillForm(false);
      resetPathForm();
    }
  };

  // Jobs functions
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

  const handleJobSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingJob) {
        const { error } = await supabase
          .from('job_postings')
          .update({
            ...jobFormData,
            expires_at: jobFormData.expires_at || null
          })
          .eq('id', editingJob.id);

        if (error) throw error;
        alert('Job updated successfully!');
      } else {
        const { error } = await supabase
          .from('job_postings')
          .insert([{
            ...jobFormData,
            expires_at: jobFormData.expires_at || null
          }]);

        if (error) throw error;
        alert('Job created successfully!');
      }

      resetJobForm();
      loadJobs();
    } catch (error) {
      console.error('Error saving job:', error);
      alert('Failed to save job');
    } finally {
      setIsLoading(false);
    }
  };

  const resetJobForm = () => {
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
    setEditingJob(null);
    setShowJobForm(false);
  };

  const handleEditJob = (job: JobPosting) => {
    setEditingJob(job);
    setJobFormData({
      title: job.title,
      location: job.location,
      contract_type: job.contract_type,
      role: job.role,
      salary: job.salary,
      description: job.description,
      expires_at: job.expires_at ? job.expires_at.split('T')[0] : '',
      is_active: job.is_active
    });
    setShowJobForm(true);
    setShowShiftForm(false);
    setShowSkillForm(false);
    setShowPathForm(false);
  };

  const handleDeleteJob = async (id: string) => {
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

  // Shifts functions
  const loadShifts = async () => {
    setIsLoading(true);
    try {
      const data = await getAllShifts();
      setShifts(data);
    } catch (error) {
      console.error('Error loading shifts:', error);
      alert('Failed to load shifts');
    } finally {
      setIsLoading(false);
    }
  };

  const handleShiftSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const shiftData = {
        ...shiftFormData,
        hourlyRate: parseFloat(shiftFormData.hourlyRate),
        startTime: new Date(shiftFormData.startTime).toISOString(),
        endTime: new Date(shiftFormData.endTime).toISOString(),
      };

      if (editingShift) {
        await updateShift(editingShift.id, shiftData);
        alert('Shift updated successfully!');
      } else {
        await createShift(shiftData);
        alert('Shift created successfully!');
      }

      resetShiftForm();
      loadShifts();
    } catch (error) {
      console.error('Error saving shift:', error);
      alert('Failed to save shift');
    } finally {
      setIsLoading(false);
    }
  };

  const resetShiftForm = () => {
    setShiftFormData({
      title: '',
      location: '',
      facilityName: '',
      startTime: '',
      endTime: '',
      hourlyRate: '',
      sector: 'healthcare',
      requirements: [],
      urgency: 'medium',
      description: '',
      isActive: true
    });
    setEditingShift(null);
    setShowShiftForm(false);
    setRequirementInput('');
  };

  const handleEditShift = (shift: Shift) => {
    setEditingShift(shift);
    setShiftFormData({
      title: shift.title,
      location: shift.location,
      facilityName: shift.facilityName,
      startTime: new Date(shift.startTime).toISOString().slice(0, 16),
      endTime: new Date(shift.endTime).toISOString().slice(0, 16),
      hourlyRate: shift.hourlyRate.toString(),
      sector: shift.sector,
      requirements: shift.requirements || [],
      urgency: shift.urgency,
      description: shift.description || '',
      isActive: shift.isActive
    });
    setShowShiftForm(true);
    setShowJobForm(false);
    setShowSkillForm(false);
    setShowPathForm(false);
  };

  const handleDeleteShift = async (id: string) => {
    if (!confirm('Are you sure you want to delete this shift?')) return;

    setIsLoading(true);
    try {
      await deleteShift(id);
      alert('Shift deleted successfully!');
      loadShifts();
    } catch (error) {
      console.error('Error deleting shift:', error);
      alert('Failed to delete shift');
    } finally {
      setIsLoading(false);
    }
  };

  const addRequirement = () => {
    if (requirementInput.trim() && !shiftFormData.requirements.includes(requirementInput.trim())) {
      setShiftFormData({
        ...shiftFormData,
        requirements: [...shiftFormData.requirements, requirementInput.trim()]
      });
      setRequirementInput('');
    }
  };

  const removeRequirement = (index: number) => {
    setShiftFormData({
      ...shiftFormData,
      requirements: shiftFormData.requirements.filter((_, i) => i !== index)
    });
  };

  // Skills functions
  const loadSkills = async () => {
    setIsLoading(true);
    try {
      const data = await getAllSkills();
      setSkills(data);
    } catch (error) {
      console.error('Error loading skills:', error);
      alert('Failed to load skills');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSkillSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingSkill) {
        await updateSkill(editingSkill.id, skillFormData);
        alert('Skill updated successfully!');
      } else {
        await createSkill(skillFormData);
        alert('Skill created successfully!');
      }

      resetSkillForm();
      loadSkills();
    } catch (error) {
      console.error('Error saving skill:', error);
      alert('Failed to save skill');
    } finally {
      setIsLoading(false);
    }
  };

  const resetSkillForm = () => {
    setSkillFormData({
      name: '',
      category: '',
      description: '',
      duration: '',
      provider: '',
      earnsPremium: false,
      premiumRate: '',
      isActive: true
    });
    setEditingSkill(null);
    setShowSkillForm(false);
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
    setSkillFormData({
      name: skill.name,
      category: skill.category,
      description: skill.description || '',
      duration: skill.duration || '',
      provider: skill.provider || '',
      earnsPremium: skill.earnsPremium,
      premiumRate: skill.premiumRate || '',
      isActive: skill.isActive
    });
    setShowSkillForm(true);
    setShowJobForm(false);
    setShowShiftForm(false);
    setShowPathForm(false);
  };

  const handleDeleteSkill = async (id: string) => {
    if (!confirm('Are you sure you want to delete this skill?')) return;

    setIsLoading(true);
    try {
      await deleteSkill(id);
      alert('Skill deleted successfully!');
      loadSkills();
    } catch (error) {
      console.error('Error deleting skill:', error);
      alert('Failed to delete skill');
    } finally {
      setIsLoading(false);
    }
  };

  // Career paths functions
  const loadCareerPaths = async () => {
    setIsLoading(true);
    try {
      const data = await getAllCareerPaths();
      setCareerPaths(data);
    } catch (error) {
      console.error('Error loading career paths:', error);
      alert('Failed to load career paths');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePathSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (editingPath) {
        await updateCareerPath(editingPath.id, pathFormData);
        alert('Career path updated successfully!');
      } else {
        await createCareerPath(pathFormData);
        alert('Career path created successfully!');
      }

      resetPathForm();
      loadCareerPaths();
    } catch (error) {
      console.error('Error saving career path:', error);
      alert('Failed to save career path');
    } finally {
      setIsLoading(false);
    }
  };

  const resetPathForm = () => {
    setPathFormData({
      title: '',
      currentRole: '',
      targetRole: '',
      salaryIncrease: '',
      requiredSkills: [],
      timeToComplete: '',
      description: '',
      isActive: true
    });
    setEditingPath(null);
    setShowPathForm(false);
    setSkillInput('');
  };

  const handleEditPath = (path: CareerPath) => {
    setEditingPath(path);
    setPathFormData({
      title: path.title,
      currentRole: path.currentRole,
      targetRole: path.targetRole,
      salaryIncrease: path.salaryIncrease,
      requiredSkills: path.requiredSkills || [],
      timeToComplete: path.timeToComplete,
      description: path.description || '',
      isActive: path.isActive
    });
    setShowPathForm(true);
    setShowJobForm(false);
    setShowShiftForm(false);
    setShowSkillForm(false);
  };

  const handleDeletePath = async (id: string) => {
    if (!confirm('Are you sure you want to delete this career path?')) return;

    setIsLoading(true);
    try {
      await deleteCareerPath(id);
      alert('Career path deleted successfully!');
      loadCareerPaths();
    } catch (error) {
      console.error('Error deleting career path:', error);
      alert('Failed to delete career path');
    } finally {
      setIsLoading(false);
    }
  };

  const addSkill = () => {
    if (skillInput.trim() && !pathFormData.requiredSkills.includes(skillInput.trim())) {
      setPathFormData({
        ...pathFormData,
        requiredSkills: [...pathFormData.requiredSkills, skillInput.trim()]
      });
      setSkillInput('');
    }
  };

  const removeSkill = (index: number) => {
    setPathFormData({
      ...pathFormData,
      requiredSkills: pathFormData.requiredSkills.filter((_, i) => i !== index)
    });
  };

  const getTabTitle = () => {
    switch (activeTab) {
      case 'jobs': return 'Job';
      case 'shifts': return 'Shift';
      case 'skills': return 'Skill';
      case 'paths': return 'Career Path';
      default: return 'Item';
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
            <h1 className="text-2xl font-bold text-primary-900">Admin Dashboard</h1>
            <div className="flex gap-4">
              <Button
                onClick={handleAddNewClick}
                variant="primary"
                size="md"
              >
                <Plus className="w-4 h-4 mr-2" />
                Add New {getTabTitle()}
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
          
          {/* Tab Navigation */}
          <div className="flex border-b border-gray-200 mt-4">
            <button
              onClick={() => {
                setActiveTab('jobs');
                setShowJobForm(false);
                setShowShiftForm(false);
                setShowSkillForm(false);
                setShowPathForm(false);
              }}
              className={`px-6 py-3 font-medium text-sm border-b-2 ${
                activeTab === 'jobs'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Job Postings
            </button>
            <button
              onClick={() => {
                setActiveTab('shifts');
                setShowJobForm(false);
                setShowShiftForm(false);
                setShowSkillForm(false);
                setShowPathForm(false);
              }}
              className={`px-6 py-3 font-medium text-sm border-b-2 ${
                activeTab === 'shifts'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Shift Management
            </button>
            <button
              onClick={() => {
                setActiveTab('skills');
                setShowJobForm(false);
                setShowShiftForm(false);
                setShowSkillForm(false);
                setShowPathForm(false);
              }}
              className={`px-6 py-3 font-medium text-sm border-b-2 ${
                activeTab === 'skills'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Skills Management
            </button>
            <button
              onClick={() => {
                setActiveTab('paths');
                setShowJobForm(false);
                setShowShiftForm(false);
                setShowSkillForm(false);
                setShowPathForm(false);
              }}
              className={`px-6 py-3 font-medium text-sm border-b-2 ${
                activeTab === 'paths'
                  ? 'border-primary-500 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Career Paths
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Jobs Tab */}
        {activeTab === 'jobs' && (
          <>
            {/* Job Form */}
            {showJobForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  {editingJob ? 'Edit Job' : 'Add New Job'}
                </h2>
                <form onSubmit={handleJobSubmit} className="space-y-4">
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
                  <div className="flex gap-4">
                    <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                      {isLoading ? 'Saving...' : (editingJob ? 'Update Job' : 'Create Job')}
                    </Button>
                    <Button
                      type="button"
                      onClick={resetJobForm}
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
                            onClick={() => handleEditJob(job)}
                            className="p-2 text-gray-600 hover:text-primary-600"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteJob(job.id)}
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
          </>
        )}

        {/* Shifts Tab */}
        {activeTab === 'shifts' && (
          <>
            {/* Shift Form */}
            {showShiftForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  {editingShift ? 'Edit Shift' : 'Add New Shift'}
                </h2>
                <form onSubmit={handleShiftSubmit} className="space-y-4">
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Facility Name *</label>
                      <input
                        type="text"
                        value={shiftFormData.facilityName}
                        onChange={(e) => setShiftFormData({...shiftFormData, facilityName: e.target.value})}
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
                      <label className="block text-sm font-medium text-gray-700 mb-1">Hourly Rate (£) *</label>
                      <input
                        type="number"
                        step="0.01"
                        value={shiftFormData.hourlyRate}
                        onChange={(e) => setShiftFormData({...shiftFormData, hourlyRate: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Start Time *</label>
                      <input
                        type="datetime-local"
                        value={shiftFormData.startTime}
                        onChange={(e) => setShiftFormData({...shiftFormData, startTime: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">End Time *</label>
                      <input
                        type="datetime-local"
                        value={shiftFormData.endTime}
                        onChange={(e) => setShiftFormData({...shiftFormData, endTime: e.target.value})}
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
                        <option value="healthcare">General Healthcare</option>
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
                        onChange={(e) => setShiftFormData({...shiftFormData, urgency: e.target.value as 'low' | 'medium' | 'high'})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      >
                        <option value="low">Low Priority</option>
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Requirements</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={requirementInput}
                        onChange={(e) => setRequirementInput(e.target.value)}
                        placeholder="Add a requirement..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addRequirement())}
                      />
                      <Button type="button" onClick={addRequirement} variant="outline" size="md">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {shiftFormData.requirements.map((req, index) => (
                        <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                          {req}
                          <button
                            type="button"
                            onClick={() => removeRequirement(index)}
                            className="ml-2 text-primary-500 hover:text-primary-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
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
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="shift_is_active"
                      checked={shiftFormData.isActive}
                      onChange={(e) => setShiftFormData({...shiftFormData, isActive: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="shift_is_active" className="text-sm font-medium text-gray-700">
                      Shift is active
                    </label>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                      {isLoading ? 'Saving...' : (editingShift ? 'Update Shift' : 'Create Shift')}
                    </Button>
                    <Button
                      type="button"
                      onClick={resetShiftForm}
                      variant="outline"
                      size="md"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Shifts List */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-primary-900">All Shifts ({shifts.length})</h2>
              </div>
              
              {isLoading ? (
                <div className="p-6 text-center">Loading shifts...</div>
              ) : shifts.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No shifts found</div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {shifts.map(shift => (
                    <div key={shift.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-primary-900">{shift.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              shift.isActive ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {shift.isActive ? 'Active' : 'Inactive'}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              shift.urgency === 'high' ? 'bg-error-100 text-error-800' :
                              shift.urgency === 'medium' ? 'bg-warning-100 text-warning-800' :
                              'bg-success-100 text-success-800'
                            }`}>
                              {shift.urgency} priority
                            </span>
                          </div>
                          <div className="text-gray-600 mb-2">
                            <span className="mr-4">🏥 {shift.facilityName}</span>
                            <span className="mr-4">📍 {shift.location}</span>
                            <span className="mr-4">💰 £{shift.hourlyRate}/hour</span>
                            <span>🏷️ {shift.sector.replace(/-/g, ' ')}</span>
                          </div>
                          <div className="text-gray-600 mb-2 flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            <span className="mr-4">
                              {new Date(shift.startTime).toLocaleDateString('en-GB')}
                            </span>
                            <Clock className="w-4 h-4 mr-1" />
                            <span>
                              {new Date(shift.startTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })} - 
                              {new Date(shift.endTime).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                            </span>
                          </div>
                          {shift.requirements && shift.requirements.length > 0 && (
                            <div className="mb-2">
                              <span className="text-sm text-gray-500">Requirements: </span>
                              {shift.requirements.map((req, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1">
                                  {req}
                                </span>
                              ))}
                            </div>
                          )}
                          {shift.description && (
                            <p className="text-gray-700 text-sm mb-2">{shift.description}</p>
                          )}
                          <div className="text-xs text-gray-500">
                            Created: {new Date(shift.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEditShift(shift)}
                            className="p-2 text-gray-600 hover:text-primary-600"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteShift(shift.id)}
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
          </>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <>
            {/* Skill Form */}
            {showSkillForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  {editingSkill ? 'Edit Skill' : 'Add New Skill'}
                </h2>
                <form onSubmit={handleSkillSubmit} className="space-y-4">
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
                        placeholder="e.g., Mental Health, Clinical Skills"
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
                        placeholder="e.g., NHS, Skills for Care"
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
                      placeholder="Describe what this skill covers..."
                    />
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="earns_premium"
                        checked={skillFormData.earnsPremium}
                        onChange={(e) => setSkillFormData({...skillFormData, earnsPremium: e.target.checked})}
                        className="mr-2"
                      />
                      <label htmlFor="earns_premium" className="text-sm font-medium text-gray-700">
                        Earns Premium
                      </label>
                    </div>
                    
                    {skillFormData.earnsPremium && (
                      <div className="flex-1">
                        <input
                          type="text"
                          value={skillFormData.premiumRate}
                          onChange={(e) => setSkillFormData({...skillFormData, premiumRate: e.target.value})}
                          placeholder="e.g., +£3.50/hour"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="skill_is_active"
                      checked={skillFormData.isActive}
                      onChange={(e) => setSkillFormData({...skillFormData, isActive: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="skill_is_active" className="text-sm font-medium text-gray-700">
                      Skill is active
                    </label>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                      {isLoading ? 'Saving...' : (editingSkill ? 'Update Skill' : 'Create Skill')}
                    </Button>
                    <Button
                      type="button"
                      onClick={resetSkillForm}
                      variant="outline"
                      size="md"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Skills List */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-primary-900">All Skills ({skills.length})</h2>
              </div>
              
              {isLoading ? (
                <div className="p-6 text-center">Loading skills...</div>
              ) : skills.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No skills found</div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {skills.map(skill => (
                    <div key={skill.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-primary-900">{skill.name}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              skill.isActive ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {skill.isActive ? 'Active' : 'Inactive'}
                            </span>
                            <span className="bg-primary-100 text-primary-700 px-2 py-1 rounded-full text-xs font-medium">
                              {skill.category}
                            </span>
                            {skill.earnsPremium && (
                              <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                                Premium: {skill.premiumRate}
                              </span>
                            )}
                          </div>
                          {skill.description && (
                            <p className="text-gray-700 text-sm mb-2">{skill.description}</p>
                          )}
                          <div className="text-gray-600 mb-2">
                            {skill.duration && <span className="mr-4">⏱️ {skill.duration}</span>}
                            {skill.provider && <span>🏢 {skill.provider}</span>}
                          </div>
                          <div className="text-xs text-gray-500">
                            Created: {new Date(skill.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEditSkill(skill)}
                            className="p-2 text-gray-600 hover:text-primary-600"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeleteSkill(skill.id)}
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
          </>
        )}

        {/* Career Paths Tab */}
        {activeTab === 'paths' && (
          <>
            {/* Career Path Form */}
            {showPathForm && (
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">
                  {editingPath ? 'Edit Career Path' : 'Add New Career Path'}
                </h2>
                <form onSubmit={handlePathSubmit} className="space-y-4">
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
                        value={pathFormData.timeToComplete}
                        onChange={(e) => setPathFormData({...pathFormData, timeToComplete: e.target.value})}
                        placeholder="e.g., 3-6 months"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Current Role *</label>
                      <input
                        type="text"
                        value={pathFormData.currentRole}
                        onChange={(e) => setPathFormData({...pathFormData, currentRole: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Target Role *</label>
                      <input
                        type="text"
                        value={pathFormData.targetRole}
                        onChange={(e) => setPathFormData({...pathFormData, targetRole: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Salary Increase *</label>
                      <input
                        type="text"
                        value={pathFormData.salaryIncrease}
                        onChange={(e) => setPathFormData({...pathFormData, salaryIncrease: e.target.value})}
                        placeholder="e.g., +£4,000 - £6,000 annually"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Required Skills</label>
                    <div className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Add a required skill..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      />
                      <Button type="button" onClick={addSkill} variant="outline" size="md">
                        Add
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {pathFormData.requiredSkills.map((skill, index) => (
                        <span key={index} className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm flex items-center">
                          {skill}
                          <button
                            type="button"
                            onClick={() => removeSkill(index)}
                            className="ml-2 text-primary-500 hover:text-primary-700"
                          >
                            ×
                          </button>
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                    <textarea
                      value={pathFormData.description}
                      onChange={(e) => setPathFormData({...pathFormData, description: e.target.value})}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Describe this career advancement path..."
                    />
                  </div>
                  
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="path_is_active"
                      checked={pathFormData.isActive}
                      onChange={(e) => setPathFormData({...pathFormData, isActive: e.target.checked})}
                      className="mr-2"
                    />
                    <label htmlFor="path_is_active" className="text-sm font-medium text-gray-700">
                      Career path is active
                    </label>
                  </div>
                  
                  <div className="flex gap-4">
                    <Button type="submit" variant="primary" size="md" disabled={isLoading}>
                      {isLoading ? 'Saving...' : (editingPath ? 'Update Career Path' : 'Create Career Path')}
                    </Button>
                    <Button
                      type="button"
                      onClick={resetPathForm}
                      variant="outline"
                      size="md"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}

            {/* Career Paths List */}
            <div className="bg-white rounded-lg shadow-md">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-primary-900">All Career Paths ({careerPaths.length})</h2>
              </div>
              
              {isLoading ? (
                <div className="p-6 text-center">Loading career paths...</div>
              ) : careerPaths.length === 0 ? (
                <div className="p-6 text-center text-gray-500">No career paths found</div>
              ) : (
                <div className="divide-y divide-gray-200">
                  {careerPaths.map(path => (
                    <div key={path.id} className="p-6">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-lg font-semibold text-primary-900">{path.title}</h3>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              path.isActive ? 'bg-success-100 text-success-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {path.isActive ? 'Active' : 'Inactive'}
                            </span>
                            <span className="bg-success-100 text-success-700 px-2 py-1 rounded-full text-xs font-medium">
                              {path.salaryIncrease}
                            </span>
                          </div>
                          <div className="text-gray-600 mb-2">
                            <span className="mr-4">📈 {path.currentRole} → {path.targetRole}</span>
                            <span>⏱️ {path.timeToComplete}</span>
                          </div>
                          {path.description && (
                            <p className="text-gray-700 text-sm mb-2">{path.description}</p>
                          )}
                          {path.requiredSkills && path.requiredSkills.length > 0 && (
                            <div className="mb-2">
                              <span className="text-sm text-gray-500">Required Skills: </span>
                              {path.requiredSkills.map((skill, index) => (
                                <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs mr-1">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          )}
                          <div className="text-xs text-gray-500">
                            Created: {new Date(path.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <div className="flex gap-2 ml-4">
                          <button
                            onClick={() => handleEditPath(path)}
                            className="p-2 text-gray-600 hover:text-primary-600"
                            title="Edit"
                          >
                            <Edit className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDeletePath(path.id)}
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
          </>
        )}
      </div>
    </div>
  );
};

export default Admin;