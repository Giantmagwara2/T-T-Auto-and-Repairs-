import React from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          From routine maintenance to high-performance tuning, we offer a complete suite of world-class services, executed with technical precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service, index) => (
          <div key={service.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

       <div className="mt-16 text-center bg-black/30 p-8 rounded-lg border border-weathered-brass/30">
        <h2 className="font-sans text-2xl font-bold text-white mb-4">Don't see what you're looking for?</h2>
        <p className="text-gray-400 mb-6">Our expertise is vast. If you have a specific need or a custom project in mind, get in touch with our AI assistant or contact us directly.</p>
        <a href="#/contact" className="bg-weathered-brass text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean-dark focus:ring-weathered-brass">
          Contact Our Experts
        </a>
      </div>
    </div>
  );
};

export default Services;