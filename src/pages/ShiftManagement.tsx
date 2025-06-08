import React, { useState, useEffect } from 'react';
import Layout from '../components/layout/Layout';
import { MapPin, Clock, Award, Filter } from 'lucide-react';
import Button from '../components/ui/Button';
import { getShifts, type Shift } from '../lib/shifts';

const ShiftManagement: React.FC = () => {
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filters, setFilters] = useState({
    location: '',
    distance: '',
    sector: '',
    urgency: ''
  });

  useEffect(() => {
    loadShifts();
  }, []);

  const loadShifts = async (searchFilters?: any) => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await getShifts(searchFilters);
      setShifts(data);
    } catch (err) {
      setError('Failed to load shifts. Please try again later.');
      console.error('Error loading shifts:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
    const searchFilters: any = {};
    
    if (newFilters.sector) searchFilters.sector = newFilters.sector;
    if (newFilters.urgency) searchFilters.urgency = newFilters.urgency;
    if (newFilters.location) searchFilters.location = newFilters.location;
    
    loadShifts(searchFilters);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-error-100 text-error-800';
      case 'medium': return 'bg-warning-100 text-warning-800';
      case 'low': return 'bg-success-100 text-success-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleTimeString('en-GB', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDate = (timeString: string) => {
    const date = new Date(timeString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      day: 'numeric',
      month: 'short'
    });
  };

  const calculateDistance = () => {
    // Mock distance calculation - in real app would use geolocation
    return `${(Math.random() * 10 + 1).toFixed(1)} miles`;
  };

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
                    onChange={(e) => handleFilterChange({...filters, sector: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">All Sectors</option>
                    <option value="mental-health">Mental Health</option>
                    <option value="learning-disabilities">Learning Disabilities</option>
                    <option value="dementia">Specialist Dementia</option>
                    <option value="healthcare">General Healthcare</option>
                    <option value="security">Security</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="admin">Administrative</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="Enter location..."
                    value={filters.location}
                    onChange={(e) => handleFilterChange({...filters, location: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                  <select 
                    value={filters.urgency}
                    onChange={(e) => handleFilterChange({...filters, urgency: e.target.value})}
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
                    onClick={() => handleFilterChange({location: '', distance: '', sector: '', urgency: ''})}
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
              <h2 className="text-2xl font-bold text-primary-900">
                Available Shifts ({isLoading ? '...' : shifts.length})
              </h2>
              
              {error && (
                <div className="p-4 bg-error-100 text-error-800 rounded-md">
                  {error}
                </div>
              )}
              
              {isLoading ? (
                <div className="text-center py-8 text-gray-600">Loading shifts...</div>
              ) : shifts.length === 0 ? (
                <div className="text-center py-8 text-gray-600">
                  No shifts found matching your criteria.
                </div>
              ) : (
                shifts.map(shift => (
                  <div key={shift.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary-900 mb-2">{shift.title}</h3>
                        <div className="flex items-center text-gray-600 mb-2">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{shift.facilityName}, {shift.location} • {calculateDistance()} away</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>
                            {formatDate(shift.startTime)} • {formatTime(shift.startTime)} - {formatTime(shift.endTime)}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary-900 mb-2">£{shift.hourlyRate}/hour</div>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getUrgencyColor(shift.urgency)}`}>
                          {shift.urgency.charAt(0).toUpperCase() + shift.urgency.slice(1)} Priority
                        </span>
                      </div>
                    </div>
                    
                    {shift.description && (
                      <div className="mb-4">
                        <p className="text-gray-700">{shift.description}</p>
                      </div>
                    )}
                    
                    {shift.requirements && shift.requirements.length > 0 && (
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
                    )}
                    
                    <div className="flex justify-between items-center">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                      <Button variant="primary" size="sm">
                        Book This Shift
                      </Button>
                    </div>
                  </div>
                ))
              )}
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