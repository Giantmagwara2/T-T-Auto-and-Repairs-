
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-weathered-brass/30 hover:border-weathered-brass hover:shadow-weathered-brass/20 transition-all duration-300 transform hover:-translate-y-2">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-weathered-brass/20 mb-4 mx-auto">
        <Icon className="h-8 w-8 text-weathered-brass" />
      </div>
      <h3 className="font-sans text-xl font-bold text-center text-white mb-2">{service.name}</h3>
      <p className="text-gray-400 text-center text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;
