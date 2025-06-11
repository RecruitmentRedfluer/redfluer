import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { TrendingUp, Clock, Award, CheckCircle } from 'lucide-react';
import CareerPathApplication from '../components/ui/CareerPathApplication';
import { getCareerPathById, type CareerPath } from '../lib/skills';

const ApplyCareerPath: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [careerPath, setCareerPath] = useState<CareerPath | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/skills');
      return;
    }

    loadCareerPath(id);
  }, [id, navigate]);

  const loadCareerPath = async (pathId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getCareerPathById(pathId);
      setCareerPath(data);
    } catch (err) {
      setError('Failed to load career path details. Please try again later.');
      console.error('Error loading career path:', err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600">Loading career path details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !careerPath) {
    return (
      <Layout pageTitle="Career Path Not Found">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {error || 'Career Path Not Found'}
              </h2>
              <p className="text-gray-600 mb-6">
                Sorry, the career path you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`Apply for ${careerPath.title}`}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
                  {careerPath.title}
                </h1>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                  Career Advancement
                </span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Current Role</h3>
                  <p className="text-gray-700">{careerPath.currentRole}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Target Role</h3>
                  <p className="text-gray-700">{careerPath.targetRole}</p>
                </div>
                <div className="bg-success-50 p-4 rounded-lg border border-success-200">
                  <h3 className="font-semibold text-success-800 mb-2">Salary Increase</h3>
                  <p className="text-success-700 font-medium">{careerPath.salaryIncrease}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-primary-500" />
                  <span>Duration: {careerPath.timeToComplete}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{careerPath.requiredSkills.length} Skills Required</span>
                </div>
              </div>
              
              {careerPath.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-primary-900 mb-3">Career Path Overview</h2>
                  <div className="text-gray-700 space-y-4">
                    {careerPath.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="bg-success-50 p-6 rounded-lg border border-success-200 mb-8">
                <div className="flex items-start">
                  <TrendingUp className="w-6 h-6 text-success-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-success-800 mb-2">Career Advancement Opportunity</h3>
                    <p className="text-success-700 mb-2">
                      This structured career path will help you advance from {careerPath.currentRole} to {careerPath.targetRole}, 
                      with a potential salary increase of {careerPath.salaryIncrease}.
                    </p>
                    <p className="text-success-600 text-sm">
                      Our career advisors will work with you to create a personalised development plan and provide ongoing support throughout your journey.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-4">Required Skills & Training</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {careerPath.requiredSkills.map((skill, index) => (
                    <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-primary-500 mr-3" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-3">What's Included</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Personalized career development plan</li>
                  <li>Access to all required training programs</li>
                  <li>One-on-one mentoring with experienced professionals</li>
                  <li>Regular progress reviews and feedback sessions</li>
                  <li>Job placement assistance upon completion</li>
                  <li>Ongoing support during your career transition</li>
                  <li>Professional certification for completed training</li>
                  <li>Access to exclusive job opportunities</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Prerequisites</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Current employment in healthcare or care sector</li>
                  <li>Minimum 1 year experience in your current role</li>
                  <li>Commitment to complete the full career path program</li>
                  <li>Willingness to undertake additional training and development</li>
                  <li>Valid DBS check and right to work in the UK</li>
                  <li>Strong motivation for career advancement</li>
                </ul>
              </div>
            </div>
            
            <CareerPathApplication 
              pathId={careerPath.id} 
              pathTitle={careerPath.title}
              currentRole={careerPath.currentRole}
              targetRole={careerPath.targetRole}
              salaryIncrease={careerPath.salaryIncrease}
              timeToComplete={careerPath.timeToComplete}
              requiredSkills={careerPath.requiredSkills}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyCareerPath;