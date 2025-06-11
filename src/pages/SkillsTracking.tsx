import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { Award, CheckCircle, Clock, TrendingUp, BookOpen, Filter, Plus } from 'lucide-react';
import Button from '../components/ui/Button';
import { getSkills, getCareerPaths, getUserSkills, createUserSkill, updateUserSkill, type Skill, type CareerPath, type UserSkill } from '../lib/skills';

const SkillsTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'paths'>('skills');
  const [skills, setSkills] = useState<Skill[]>([]);
  const [careerPaths, setCareerPaths] = useState<CareerPath[]>([]);
  const [userSkills, setUserSkills] = useState<UserSkill[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    category: '',
    earnsPremium: ''
  });

  // Mock user email - in real app this would come from authentication
  const userEmail = 'user@example.com';

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const [skillsData, pathsData, userSkillsData] = await Promise.all([
        getSkills(),
        getCareerPaths(),
        getUserSkills(userEmail)
      ]);
      
      setSkills(skillsData);
      setCareerPaths(pathsData);
      setUserSkills(userSkillsData);
    } catch (err) {
      setError('Failed to load data. Please try again later.');
      console.error('Error loading data:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = async (newFilters: typeof filters) => {
    setFilters(newFilters);
    try {
      const searchFilters: any = {};
      if (newFilters.category) searchFilters.category = newFilters.category;
      if (newFilters.earnsPremium) searchFilters.earnsPremium = newFilters.earnsPremium === 'true';
      
      const filteredSkills = await getSkills(searchFilters);
      setSkills(filteredSkills);
    } catch (err) {
      console.error('Error filtering skills:', err);
    }
  };

  const handleStartTraining = async (skill: Skill) => {
    try {
      await createUserSkill({
        skillId: skill.id,
        userEmail,
        status: 'in-progress',
        progressPercentage: 0,
        startedAt: new Date().toISOString()
      });
      
      // Reload user skills
      const updatedUserSkills = await getUserSkills(userEmail);
      setUserSkills(updatedUserSkills);
      
      alert(`Started training for ${skill.name}!`);
    } catch (err) {
      console.error('Error starting training:', err);
      alert('Failed to start training. Please try again.');
    }
  };

  const handleCompleteTraining = async (userSkill: UserSkill) => {
    try {
      await updateUserSkill(userSkill.id, {
        status: 'completed',
        progressPercentage: 100,
        completedAt: new Date().toISOString()
      });
      
      // Reload user skills
      const updatedUserSkills = await getUserSkills(userEmail);
      setUserSkills(updatedUserSkills);
      
      alert('Congratulations! Training completed successfully!');
    } catch (err) {
      console.error('Error completing training:', err);
      alert('Failed to complete training. Please try again.');
    }
  };

  const getSkillStatus = (skill: Skill) => {
    const userSkill = userSkills.find(us => us.skillId === skill.id);
    return userSkill?.status || 'available';
  };

  const getUserSkillData = (skill: Skill) => {
    return userSkills.find(us => us.skillId === skill.id);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-success-500" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-warning-500" />;
      case 'available':
        return <BookOpen className="w-5 h-5 text-primary-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-success-100 text-success-800';
      case 'in-progress':
        return 'bg-warning-100 text-warning-800';
      case 'available':
        return 'bg-primary-100 text-primary-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUniqueCategories = () => {
    const categories = skills.map(skill => skill.category);
    return [...new Set(categories)];
  };

  if (isLoading) {
    return (
      <Layout pageTitle="Skills & Career Development">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-600">Loading skills and career data...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle="Skills & Career Development">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Introduction */}
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600 mb-6">
                Our platform provides clear guidance on what certification is required to earn more per shift. 
                Track your current qualifications, discover upskilling opportunities, and see exactly how additional training can increase your earning potential.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                  <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">Track Qualifications</h3>
                  <p className="text-sm text-gray-600">Monitor your current certifications and training progress</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                  <TrendingUp className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">Increase Earnings</h3>
                  <p className="text-sm text-gray-600">See exactly how much more you can earn with additional skills</p>
                </div>
                <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                  <BookOpen className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                  <h3 className="font-semibold text-primary-900 mb-2">Career Pathways</h3>
                  <p className="text-sm text-gray-600">Discover clear routes to advance your healthcare career</p>
                </div>
              </div>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-error-100 text-error-800 rounded-md">
                {error}
              </div>
            )}

            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 mb-8">
              <button
                onClick={() => setActiveTab('skills')}
                className={`px-6 py-3 font-medium text-sm border-b-2 ${
                  activeTab === 'skills'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                My Skills & Certifications ({skills.length})
              </button>
              <button
                onClick={() => setActiveTab('paths')}
                className={`px-6 py-3 font-medium text-sm border-b-2 ${
                  activeTab === 'paths'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Career Advancement Paths ({careerPaths.length})
              </button>
            </div>

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                {/* Filters */}
                <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                  <div className="flex items-center mb-4">
                    <Filter className="w-5 h-5 text-primary-500 mr-2" />
                    <h3 className="text-lg font-semibold text-primary-900">Filter Skills</h3>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                      <select 
                        value={filters.category}
                        onChange={(e) => handleFilterChange({...filters, category: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">All Categories</option>
                        {getUniqueCategories().map(category => (
                          <option key={category} value={category}>{category}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Premium Skills</label>
                      <select 
                        value={filters.earnsPremium}
                        onChange={(e) => handleFilterChange({...filters, earnsPremium: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                      >
                        <option value="">All Skills</option>
                        <option value="true">Premium Skills Only</option>
                        <option value="false">Standard Skills Only</option>
                      </select>
                    </div>
                    <div className="flex items-end">
                      <Button 
                        onClick={() => handleFilterChange({category: '', earnsPremium: ''})}
                        variant="outline" 
                        size="md"
                        fullWidth
                      >
                        Clear Filters
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary-900">Your Skills Portfolio</h2>
                  <div className="text-sm text-gray-600">
                    Completed: {userSkills.filter(us => us.status === 'completed').length} | 
                    In Progress: {userSkills.filter(us => us.status === 'in-progress').length}
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {skills.map(skill => {
                    const status = getSkillStatus(skill);
                    const userSkillData = getUserSkillData(skill);
                    
                    return (
                      <div key={skill.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center">
                            {getStatusIcon(status)}
                            <h3 className="text-lg font-semibold text-primary-900 ml-2">{skill.name}</h3>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
                            {status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                          </span>
                        </div>
                        
                        <div className="mb-4">
                          <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm mb-2">
                            {skill.category}
                          </span>
                          {skill.description && (
                            <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
                          )}
                          <div className="flex justify-between text-sm text-gray-500">
                            {skill.duration && <span>Duration: {skill.duration}</span>}
                            {skill.provider && <span>Provider: {skill.provider}</span>}
                          </div>
                        </div>
                        
                        {skill.earnsPremium && skill.premiumRate && (
                          <div className="bg-success-50 p-3 rounded-lg border border-success-200 mb-4">
                            <div className="flex items-center">
                              <TrendingUp className="w-4 h-4 text-success-600 mr-2" />
                              <span className="text-success-800 font-medium">Earns Premium: {skill.premiumRate}</span>
                            </div>
                          </div>
                        )}
                        
                        {status === 'in-progress' && userSkillData && (
                          <div className="mb-4">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                              <span>Progress</span>
                              <span>{userSkillData.progressPercentage}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-primary-500 h-2 rounded-full" 
                                style={{ width: `${userSkillData.progressPercentage}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex justify-between items-center">
                          {status === 'available' && (
                            <Button 
                              to={`/apply-skill/${skill.id}`}
                              variant="primary" 
                              size="sm"
                            >
                              Apply for Training
                            </Button>
                          )}
                          {status === 'in-progress' && userSkillData && (
                            <Button 
                              onClick={() => handleCompleteTraining(userSkillData)}
                              variant="primary" 
                              size="sm"
                            >
                              Mark Complete
                            </Button>
                          )}
                          {status === 'completed' && (
                            <Button variant="outline" size="sm">
                              View Certificate
                            </Button>
                          )}
                          <Button to={`/apply-skill/${skill.id}`} variant="outline" size="sm">
                            View Details
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Career Paths Tab */}
            {activeTab === 'paths' && (
              <div>
                <h2 className="text-2xl font-bold text-primary-900 mb-6">Career Advancement Opportunities</h2>
                <p className="text-gray-600 mb-8">
                  Explore clear pathways to advance your career and increase your earning potential. Each path shows you exactly what skills you need and how much more you could earn.
                </p>

                <div className="space-y-6">
                  {careerPaths.map(path => (
                    <div key={path.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                          <h3 className="text-xl font-semibold text-primary-900 mb-3">{path.title}</h3>
                          <div className="space-y-2">
                            <div>
                              <span className="text-sm text-gray-500">Current Role:</span>
                              <p className="font-medium text-gray-900">{path.currentRole}</p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">Target Role:</span>
                              <p className="font-medium text-gray-900">{path.targetRole}</p>
                            </div>
                          </div>
                          {path.description && (
                            <p className="text-gray-600 text-sm mt-3">{path.description}</p>
                          )}
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Required Skills:</h4>
                          <div className="space-y-2">
                            {path.requiredSkills.map((skillName, index) => {
                              const skill = skills.find(s => s.name === skillName);
                              const userHasSkill = skill && getSkillStatus(skill) === 'completed';
                              
                              return (
                                <div key={index} className="flex items-center">
                                  {userHasSkill ? (
                                    <CheckCircle className="w-4 h-4 text-success-500 mr-2" />
                                  ) : (
                                    <Clock className="w-4 h-4 text-gray-400 mr-2" />
                                  )}
                                  <span className={`text-sm ${userHasSkill ? 'text-success-700' : 'text-gray-700'}`}>
                                    {skillName}
                                  </span>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        
                        <div>
                          <div className="bg-success-50 p-4 rounded-lg border border-success-200 mb-4">
                            <div className="text-center">
                              <TrendingUp className="w-6 h-6 text-success-600 mx-auto mb-2" />
                              <p className="text-success-800 font-semibold">{path.salaryIncrease}</p>
                              <p className="text-success-600 text-sm">Potential increase</p>
                            </div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-500 mb-3">Time to complete: {path.timeToComplete}</p>
                            <div className="space-y-2">
                              <Button to={`/apply-career-path/${path.id}`} variant="primary" size="sm" fullWidth>
                                Apply for This Path
                              </Button>
                              <Button to={`/apply-career-path/${path.id}`} variant="outline" size="sm" fullWidth>
                                View Details
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Custom Path CTA */}
                <div className="mt-12 bg-primary-50 p-8 rounded-lg border border-primary-100 text-center">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">
                    Need a Custom Career Path?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our career advisors can create a personalised development plan based on your current skills, career goals, and preferred timeline.
                  </p>
                  <Button variant="primary" size="md">
                    Book Career Consultation
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SkillsTracking;