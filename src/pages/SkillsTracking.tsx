import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Award, CheckCircle, Clock, TrendingUp, BookOpen } from 'lucide-react';
import Button from '../components/ui/Button';

interface Skill {
  id: string;
  name: string;
  category: string;
  status: 'completed' | 'in-progress' | 'available';
  earnsPremium: boolean;
  premiumRate?: string;
  description: string;
  duration: string;
  provider: string;
}

interface UpskillPath {
  id: string;
  title: string;
  currentRole: string;
  targetRole: string;
  salaryIncrease: string;
  requiredSkills: string[];
  timeToComplete: string;
}

const SkillsTracking: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'paths'>('skills');

  // Mock data for demonstration
  const skills: Skill[] = [
    {
      id: '1',
      name: 'Mental Health First Aid',
      category: 'Mental Health',
      status: 'completed',
      earnsPremium: true,
      premiumRate: '+£3.50/hour',
      description: 'Certified training in mental health first aid and crisis intervention',
      duration: '2 days',
      provider: 'Mental Health First Aid England'
    },
    {
      id: '2',
      name: 'Dementia Care Specialist',
      category: 'Specialist Care',
      status: 'in-progress',
      earnsPremium: true,
      premiumRate: '+£4.00/hour',
      description: 'Advanced dementia care techniques and person-centered approaches',
      duration: '5 days',
      provider: 'Alzheimer\'s Society'
    },
    {
      id: '3',
      name: 'Learning Disability Awareness',
      category: 'Learning Disabilities',
      status: 'available',
      earnsPremium: true,
      premiumRate: '+£2.50/hour',
      description: 'Understanding and supporting individuals with learning disabilities',
      duration: '1 day',
      provider: 'Mencap Training'
    },
    {
      id: '4',
      name: 'Medication Administration',
      category: 'Clinical Skills',
      status: 'completed',
      earnsPremium: true,
      premiumRate: '+£2.00/hour',
      description: 'Safe medication administration and management',
      duration: '3 days',
      provider: 'Skills for Care'
    },
    {
      id: '5',
      name: 'Safeguarding Adults',
      category: 'Safeguarding',
      status: 'completed',
      earnsPremium: false,
      description: 'Essential safeguarding training for adult care settings',
      duration: '1 day',
      provider: 'Local Authority'
    }
  ];

  const upskillPaths: UpskillPath[] = [
    {
      id: '1',
      title: 'Healthcare Assistant to Senior Care Worker',
      currentRole: 'Healthcare Assistant',
      targetRole: 'Senior Care Worker / Team Leader',
      salaryIncrease: '+£4,000 - £6,000 annually',
      requiredSkills: ['Leadership Training', 'Medication Administration', 'Safeguarding Level 2'],
      timeToComplete: '3-6 months'
    },
    {
      id: '2',
      title: 'General Nurse to Mental Health Specialist',
      currentRole: 'Registered General Nurse',
      targetRole: 'Mental Health Specialist Nurse',
      salaryIncrease: '+£5,000 - £8,000 annually',
      requiredSkills: ['Mental Health First Aid', 'CBT Foundation', 'Risk Assessment'],
      timeToComplete: '6-12 months'
    },
    {
      id: '3',
      title: 'Support Worker to Learning Disability Specialist',
      currentRole: 'Support Worker',
      targetRole: 'Learning Disability Specialist',
      salaryIncrease: '+£3,000 - £5,000 annually',
      requiredSkills: ['Learning Disability Awareness', 'Positive Behaviour Support', 'Person-Centered Planning'],
      timeToComplete: '4-8 months'
    }
  ];

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
                My Skills & Certifications
              </button>
              <button
                onClick={() => setActiveTab('paths')}
                className={`px-6 py-3 font-medium text-sm border-b-2 ${
                  activeTab === 'paths'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Career Advancement Paths
              </button>
            </div>

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-primary-900">Your Skills Portfolio</h2>
                  <Button variant="primary" size="md">
                    Add New Certification
                  </Button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {skills.map(skill => (
                    <div key={skill.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          {getStatusIcon(skill.status)}
                          <h3 className="text-lg font-semibold text-primary-900 ml-2">{skill.name}</h3>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(skill.status)}`}>
                          {skill.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <p className="text-gray-600 text-sm mb-2">{skill.description}</p>
                        <div className="flex justify-between text-sm text-gray-500">
                          <span>Duration: {skill.duration}</span>
                          <span>Provider: {skill.provider}</span>
                        </div>
                      </div>
                      
                      {skill.earnsPremium && (
                        <div className="bg-success-50 p-3 rounded-lg border border-success-200 mb-4">
                          <div className="flex items-center">
                            <TrendingUp className="w-4 h-4 text-success-600 mr-2" />
                            <span className="text-success-800 font-medium">Earns Premium: {skill.premiumRate}</span>
                          </div>
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center">
                        {skill.status === 'available' && (
                          <Button variant="primary\" size="sm">
                            Start Training
                          </Button>
                        )}
                        {skill.status === 'in-progress' && (
                          <Button variant="outline" size="sm">
                            Continue Training
                          </Button>
                        )}
                        {skill.status === 'completed' && (
                          <Button variant="outline" size="sm">
                            View Certificate
                          </Button>
                        )}
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
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
                  {upskillPaths.map(path => (
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
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Required Skills:</h4>
                          <div className="space-y-2">
                            {path.requiredSkills.map((skill, index) => (
                              <div key={index} className="flex items-center">
                                <CheckCircle className="w-4 h-4 text-primary-500 mr-2" />
                                <span className="text-sm text-gray-700">{skill}</span>
                              </div>
                            ))}
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
                            <Button variant="primary" size="sm" fullWidth>
                              Start This Path
                            </Button>
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
                    Our career advisors can create a personalized development plan based on your current skills, career goals, and preferred timeline.
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