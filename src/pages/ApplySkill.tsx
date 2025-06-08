import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Award, Clock, TrendingUp, BookOpen } from 'lucide-react';
import SkillApplication from '../components/ui/SkillApplication';
import { getSkillById, type Skill } from '../lib/skills';

const ApplySkill: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [skill, setSkill] = useState<Skill | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/skills');
      return;
    }

    loadSkill(id);
  }, [id, navigate]);

  const loadSkill = async (skillId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getSkillById(skillId);
      setSkill(data);
    } catch (err) {
      setError('Failed to load skill details. Please try again later.');
      console.error('Error loading skill:', err);
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
              <p className="text-gray-600">Loading skill details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !skill) {
    return (
      <Layout pageTitle="Skill Not Found">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {error || 'Skill Not Found'}
              </h2>
              <p className="text-gray-600 mb-6">
                Sorry, the skill you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout pageTitle={`Apply for ${skill.name} Training`}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
                  {skill.name}
                </h1>
                <div className="flex gap-2">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {skill.category}
                  </span>
                  {skill.earnsPremium && (
                    <span className="bg-success-100 text-success-700 px-3 py-1 rounded-full text-sm font-medium">
                      Premium Skill
                    </span>
                  )}
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {skill.duration && (
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-primary-500" />
                    <span>{skill.duration}</span>
                  </div>
                )}
                
                {skill.provider && (
                  <div className="flex items-center text-gray-600">
                    <BookOpen className="h-5 w-5 mr-2 text-primary-500" />
                    <span>{skill.provider}</span>
                  </div>
                )}
                
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{skill.category}</span>
                </div>
                
                {skill.earnsPremium && skill.premiumRate && (
                  <div className="flex items-center text-success-600">
                    <TrendingUp className="h-5 w-5 mr-2 text-success-500" />
                    <span className="font-medium">{skill.premiumRate}</span>
                  </div>
                )}
              </div>
              
              {skill.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-primary-900 mb-3">About This Training</h2>
                  <div className="text-gray-700 space-y-4">
                    {skill.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {skill.earnsPremium && (
                <div className="bg-success-50 p-6 rounded-lg border border-success-200 mb-8">
                  <div className="flex items-start">
                    <TrendingUp className="w-6 h-6 text-success-600 mr-3 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold text-success-800 mb-2">Premium Earning Opportunity</h3>
                      <p className="text-success-700 mb-2">
                        This skill qualifies you for premium rates{skill.premiumRate && ` of ${skill.premiumRate}`}. 
                        Completing this training will open up higher-paying shift opportunities.
                      </p>
                      <p className="text-success-600 text-sm">
                        Premium skills are in high demand and can significantly increase your earning potential.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Training Benefits</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Professional certification upon completion</li>
                  <li>Enhanced career prospects in healthcare</li>
                  <li>Access to specialized shift opportunities</li>
                  {skill.earnsPremium && <li>Qualification for premium rate shifts</li>}
                  <li>Ongoing support from our training team</li>
                  <li>Flexible training schedule options</li>
                  <li>Industry-recognized qualification</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">Prerequisites</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Current employment or experience in healthcare/care sector</li>
                  <li>Valid DBS check (we can assist with this if needed)</li>
                  <li>Basic English literacy and numeracy skills</li>
                  <li>Commitment to complete the full training program</li>
                  <li>Willingness to work in the relevant care environment</li>
                </ul>
              </div>
            </div>
            
            <SkillApplication 
              skillId={skill.id} 
              skillName={skill.name}
              category={skill.category}
              duration={skill.duration}
              provider={skill.provider}
              earnsPremium={skill.earnsPremium}
              premiumRate={skill.premiumRate}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplySkill;