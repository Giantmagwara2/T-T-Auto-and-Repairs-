
import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="bg-black/30 p-6 rounded-lg shadow-lg border border-brand-silver/20 hover:border-brand-blue hover:shadow-2xl hover:shadow-brand-blue/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-brand-blue/20 mb-4 mx-auto">
        <Icon className="h-8 w-8 text-brand-blue" />
      </div>
      <h3 className="font-sans text-xl font-bold text-center text-white mb-2">{service.name}</h3>
      <p className="text-brand-silver text-center text-sm">{service.description}</p>
    </div>
  );
};

export default ServiceCard;