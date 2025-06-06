import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Clock, Award, Filter } from 'lucide-react';
import Button from '../components/ui/Button';

interface Shift {
  id: string;
  title: string;
  location: string;
  distance: string;
  startTime: string;
  endTime: string;
  hourlyRate: string;
  requirements: string[];
  urgency: 'low' | 'medium' | 'high';
  sector: string;
}

const ShiftManagement: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [filters, setFilters] = useState({
    location: '',
    distance: '',
    sector: '',
    urgency: ''
  });

  // Mock data for demonstration
  useEffect(() => {
    const mockShifts: Shift[] = [
      {
        id: '1',
        title: 'Mental Health Nurse - Night Shift',
        location: 'Central London Hospital',
        distance: '2.3 miles',
        startTime: '20:00',
        endTime: '08:00',
        hourlyRate: '£28.50',
        requirements: ['RGN Registration', 'Mental Health Experience'],
        urgency: 'high',
        sector: 'mental-health'
      },
      {
        id: '2',
        title: 'Learning Disability Support Worker',
        location: 'Supported Living Service, North London',
        distance: '4.1 miles',
        startTime: '14:00',
        endTime: '22:00',
        hourlyRate: '£22.00',
        requirements: ['Learning Disability Training', 'DBS Check'],
        urgency: 'medium',
        sector: 'learning-disabilities'
      },
      {
        id: '3',
        title: 'Dementia Care Specialist',
        location: 'Specialist Care Home, East London',
        distance: '6.8 miles',
        startTime: '07:00',
        endTime: '19:00',
        hourlyRate: '£25.75',
        requirements: ['Dementia Care Training', 'NVQ Level 3'],
        urgency: 'low',
        sector: 'dementia'
      },
      {
        id: '4',
        title: 'Healthcare Assistant - Emergency Cover',
        location: 'Private Hospital, West London',
        distance: '3.2 miles',
        startTime: '06:00',
        endTime: '18:00',
        hourlyRate: '£20.50',
        requirements: ['Healthcare Assistant Qualification', 'Flexible'],
        urgency: 'high',
        sector: 'healthcare'
      }
    ];
    setShifts(mockShifts);
  }, []);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-error-100 text-error-800';
      case 'medium': return 'bg-warning-100 text-warning-800';
      case 'low': return 'bg-success-100 text-success-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredShifts = shifts.filter(shift => {
    if (filters.sector && shift.sector !== filters.sector) return false;
    if (filters.urgency && shift.urgency !== filters.urgency) return false;
    return true;
  });

  return (
    <Layout pageTitle="Available Shifts Near You">
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Platform Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <MapPin className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Geographic Matching</h3>
                <p className="text-sm text-gray-600">Find shifts within your preferred distance</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Clock className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Real-Time Updates</h3>
                <p className="text-sm text-gray-600">Live shift availability and instant booking</p>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg border border-primary-100 text-center">
                <Award className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                <h3 className="font-semibold text-primary-900 mb-2">Skills Matching</h3>
                <p className="text-sm text-gray-600">Only see shifts that match your qualifications</p>
              </div>
            </div>

            {/* Filters */}
            <div className="bg-white p-6 rounded-lg shadow-md mb-8">
              <div className="flex items-center mb-4">
                <Filter className="w-5 h-5 text-primary-500 mr-2" />
                <h3 className="text-lg font-semibold text-primary-900">Filter Available Shifts</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Sector</label>
                  <select 
                    value={filters.sector}
                    onChange={(e) => setFilters({...filters, sector: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">All Sectors</option>
                    <option value="mental-health">Mental Health</option>
                    <option value="learning-disabilities">Learning Disabilities</option>
                    <option value="dementia">Specialist Dementia</option>
                    <option value="healthcare">General Healthcare</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Distance</label>
                  <select 
                    value={filters.distance}
                    onChange={(e) => setFilters({...filters, distance: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Any Distance</option>
                    <option value="5">Within 5 miles</option>
                    <option value="10">Within 10 miles</option>
                    <option value="25">Within 25 miles</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                  <select 
                    value={filters.urgency}
                    onChange={(e) => setFilters({...filters, urgency: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">All Urgency Levels</option>
                    <option value="high">High Priority</option>
                    <option value="medium">Medium Priority</option>
                    <option value="low">Standard</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <Button 
                    onClick={() => setFilters({location: '', distance: '', sector: '', urgency: ''})}
                    variant="outline" 
                    size="md"
                    fullWidth
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>

            {/* Available Shifts */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-primary-900">Available Shifts ({filteredShifts.length})</h2>
              
              {filteredShifts.map(shift => (
                <div key={shift.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">{shift.title}</h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{shift.location} • {shift.distance} away</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{shift.startTime} - {shift.endTime}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary-900 mb-2">{shift.hourlyRate}/hour</div>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(shift.urgency)}`}>
                        {shift.urgency.charAt(0).toUpperCase() + shift.urgency.slice(1)} Priority
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 mb-2">Requirements:</h4>
                    <div className="flex flex-wrap gap-2">
                      {shift.requirements.map((req, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {req}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="primary" size="sm">
                      Book This Shift
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-12 bg-primary-50 p-8 rounded-lg border border-primary-100 text-center">
              <h3 className="text-xl font-semibold text-primary-900 mb-4">
                Don't see the right shift for you?
              </h3>
              <p className="text-gray-600 mb-6">
                Set up shift alerts to be notified when new opportunities matching your preferences become available.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="primary" size="md">
                  Set Up Shift Alerts
                </Button>
                <Button to="/skills" variant="outline" size="md">
                  View Upskilling Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShiftManagement;