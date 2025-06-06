import React, { useState } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import Button from './Button';

interface SearchFiltersProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    role: string;
    contractType: string;
    sector: string;
  }) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [contractType, setContractType] = useState('');
  const [sector, setSector] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, location, role, contractType, sector });
  };

  const toggleFilters = () => {
    setIsFiltersVisible(!isFiltersVisible);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <form onSubmit={handleSubmit}>
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search job titles, skills, or keywords..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Location Search */}
        <div className="relative mb-4">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Enter location or postcode to find nearby shifts..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
          />
        </div>

        {/* Toggle Filters Button */}
        <button
          type="button"
          onClick={toggleFilters}
          className="flex items-center text-primary-600 mb-4 text-sm font-medium"
        >
          <Filter size={16} className="mr-1" />
          {isFiltersVisible ? 'Hide Filters' : 'Show Advanced Filters'}
        </button>

        {/* Advanced Filters */}
        {isFiltersVisible && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 animate-fade-in">
            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                Sector
              </label>
              <select
                id="sector"
                value={sector}
                onChange={(e) => setSector(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Sectors</option>
                <option value="healthcare">Healthcare & Care</option>
                <option value="mental-health">Mental Health</option>
                <option value="learning-disabilities">Learning Disabilities</option>
                <option value="dementia">Specialist Dementia</option>
                <option value="security">Security</option>
                <option value="cleaning">Cleaning</option>
                <option value="admin">Administrative</option>
              </select>
            </div>

            <div>
              <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                Role
              </label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Roles</option>
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
              <label htmlFor="contractType" className="block text-sm font-medium text-gray-700 mb-1">
                Contract Type
              </label>
              <select
                id="contractType"
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Types</option>
                <option value="shift">Shift Work</option>
                <option value="temporary">Temporary</option>
                <option value="permanent">Permanent</option>
                <option value="contract">Contract</option>
              </select>
            </div>

            <div>
              <label htmlFor="distance" className="block text-sm font-medium text-gray-700 mb-1">
                Distance
              </label>
              <select
                id="distance"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">Any Distance</option>
                <option value="5">Within 5 miles</option>
                <option value="10">Within 10 miles</option>
                <option value="25">Within 25 miles</option>
                <option value="50">Within 50 miles</option>
              </select>
            </div>
          </div>
        )}

        <Button type="submit" variant="primary" size="md" fullWidth>
          Search Available Shifts
        </Button>
      </form>
    </div>
  );
};

export default SearchFilters;