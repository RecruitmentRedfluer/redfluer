import React from 'react';
import { MapPin, Clock, Briefcase } from 'lucide-react';
import Button from './Button';
import { JobPosting } from '../../types';

interface JobCardProps {
  job: JobPosting;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-[1.01] border border-gray-100">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-primary-900">{job.title}</h3>
        <span className="bg-primary-100 text-primary-700 text-xs font-medium px-2.5 py-1 rounded">
          {job.contract_type.charAt(0).toUpperCase() + job.contract_type.slice(1)}
        </span>
      </div>
      
      <div className="mb-4 space-y-2">
        <div className="flex items-center text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.location}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Briefcase className="h-4 w-4 mr-2" />
          <span className="text-sm">{job.salary}</span>
        </div>
        
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">Posted {formatDate(job.posted_date)}</span>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{job.description}</p>
      
      <div className="flex justify-between items-center">
        <Button to={`/job/${job.id}`} variant="outline" size="sm">
          View Details
        </Button>
        <Button to={`/apply/${job.id}`} variant="primary" size="sm">
          Apply Now
        </Button>
      </div>
    </div>
  );
};

export default JobCard;