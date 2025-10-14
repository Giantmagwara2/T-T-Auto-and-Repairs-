
import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Arsenal of Artistry</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          From routine maintenance to high-performance tuning, we offer a complete suite of services with Zulu-spirit precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>

       <div className="mt-16 text-center bg-black/30 p-8 rounded-lg border border-weathered-brass/30">
        <h2 className="font-sans text-2xl font-bold text-white mb-4">Don't see what you're looking for?</h2>
        <p className="text-gray-400 mb-6">Our expertise is vast. If you have a specific need or a custom project in mind, get in touch with our AI assistant or contact us directly.</p>
        <a href="#/contact" className="bg-weathered-brass text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition-transform transform hover:scale-105">
          Contact Our Experts
        </a>
      </div>
    </div>
  );
};

export default Services;
