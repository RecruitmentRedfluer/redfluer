import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Button from './Button';

interface SearchFiltersProps {
  onSearch: (filters: {
    keyword: string;
    location: string;
    role: string;
    contractType: string;
  }) => void;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [contractType, setContractType] = useState('');
  const [isFiltersVisible, setIsFiltersVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ keyword, location, role, contractType });
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
            placeholder="Search job titles or keywords..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
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
          {isFiltersVisible ? 'Hide Filters' : 'Show Filters'}
        </button>

        {/* Advanced Filters */}
        {isFiltersVisible && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 animate-fade-in">
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location
              </label>
              <select
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="">All Locations</option>
                <option value="London">London</option>
                <option value="Manchester">Manchester</option>
                <option value="Birmingham">Birmingham</option>
                <option value="Glasgow">Glasgow</option>
                <option value="Edinburgh">Edinburgh</option>
                <option value="Leeds">Leeds</option>
                <option value="Bristol">Bristol</option>
                <option value="Liverpool">Liverpool</option>
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
                <option value="nurse">Nurse</option>
                <option value="carer">Carer</option>
                <option value="healthcare-assistant">Healthcare Assistant</option>
                <option value="doctor">Doctor</option>
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
                <option value="permanent">Permanent</option>
                <option value="temporary">Temporary</option>
                <option value="contract">Contract</option>
              </select>
            </div>
          </div>
        )}

        <Button type="submit" variant="primary" size="md" fullWidth>
          Search Vacancies
        </Button>
      </form>
    </div>
  );
};

export default SearchFilters;