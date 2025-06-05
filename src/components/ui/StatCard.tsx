import React from 'react';
import { StatItem } from '../../types';

interface StatCardProps {
  stat: StatItem;
}

const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center">
      <div className="text-3xl font-bold text-primary-500 mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );
};

export default StatCard;