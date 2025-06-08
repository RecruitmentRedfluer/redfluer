import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { MapPin, Clock, Award } from 'lucide-react';
import ShiftApplication from '../components/ui/ShiftApplication';
import { getShiftById, type Shift } from '../lib/shifts';

const ApplyShift: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [shift, setShift] = useState<Shift | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      navigate('/shifts');
      return;
    }

    loadShift(id);
  }, [id, navigate]);

  const loadShift = async (shiftId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getShiftById(shiftId);
      setShift(data);
    } catch (err) {
      setError('Failed to load shift details. Please try again later.');
      console.error('Error loading shift:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString);
    return {
      date: new Intl.DateTimeFormat('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(date),
      time: new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(date)
    };
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-error-100 text-error-800';
      case 'medium': return 'bg-warning-100 text-warning-800';
      case 'low': return 'bg-success-100 text-success-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gray-600">Loading shift details...</p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !shift) {
    return (
      <Layout pageTitle="Shift Not Found">
        <div className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-primary-900 mb-4">
                {error || 'Shift Not Found'}
              </h2>
              <p className="text-gray-600 mb-6">
                Sorry, the shift you're looking for doesn't exist or has been removed.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  const startDateTime = formatDateTime(shift.startTime);
  const endDateTime = formatDateTime(shift.endTime);

  return (
    <Layout pageTitle={`Apply for ${shift.title}`}>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex justify-between items-start flex-wrap gap-4 mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-primary-900">
                  {shift.title}
                </h1>
                <div className="flex gap-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(shift.urgency)}`}>
                    {shift.urgency.charAt(0).toUpperCase() + shift.urgency.slice(1)} Priority
                  </span>
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    £{shift.hourlyRate}/hour
                  </span>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{shift.facilityName}, {shift.location}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Award className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{shift.sector.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{startDateTime.date}</span>
                </div>
                
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-2 text-primary-500" />
                  <span>{startDateTime.time} - {endDateTime.time}</span>
                </div>
              </div>
              
              {shift.description && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-primary-900 mb-3">Shift Description</h2>
                  <div className="text-gray-700 space-y-4">
                    {shift.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              )}
              
              {shift.requirements && shift.requirements.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-xl font-semibold text-primary-900 mb-3">Requirements</h2>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {shift.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div>
                <h2 className="text-xl font-semibold text-primary-900 mb-3">What We Offer</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Competitive hourly rate of £{shift.hourlyRate}</li>
                  <li>Weekly payment</li>
                  <li>24/7 support from our team</li>
                  <li>Ongoing professional development opportunities</li>
                  <li>Flexible working arrangements</li>
                  <li>Referral bonuses</li>
                </ul>
              </div>
            </div>
            
            <ShiftApplication 
              shiftId={shift.id} 
              shiftTitle={shift.title}
              facilityName={shift.facilityName}
              hourlyRate={shift.hourlyRate}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApplyShift;