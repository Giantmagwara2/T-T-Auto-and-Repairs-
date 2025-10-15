import React, { useState, useMemo } from 'react';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { MagnifyingGlassIcon } from '../components/icons/SolidIcons';

const Services: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = useMemo(() => {
    if (!searchQuery) {
      return SERVICES_DATA;
    }
    const lowercasedQuery = searchQuery.toLowerCase();
    return SERVICES_DATA.filter(service =>
      service.name.toLowerCase().includes(lowercasedQuery) ||
      service.description.toLowerCase().includes(lowercasedQuery)
    );
  }, [searchQuery]);

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Our Services</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-silver">
          From routine maintenance to high-performance tuning, we offer a complete suite of world-class services, executed with technical precision.
        </p>
      </div>

      <div className="mb-12 max-w-lg mx-auto">
        <label htmlFor="service-search" className="sr-only">Search Services</label>
        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                <MagnifyingGlassIcon className="h-5 w-5 text-brand-silver/60" />
            </div>
            <input
                id="service-search"
                type="text"
                placeholder="Search by name or keyword (e.g., 'engine', 'brake')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-black/30 border-2 border-brand-silver/20 rounded-full py-3 pl-14 pr-6 text-white placeholder-brand-silver/60 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:border-brand-blue transition-all"
            />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
            <div key={service.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <ServiceCard service={service} />
            </div>
            ))
        ) : (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-12">
                <h3 className="font-sans text-xl font-bold text-white">No Services Found</h3>
                <p className="text-brand-silver mt-2">Your search for "{searchQuery}" did not match any services. Try a different keyword.</p>
            </div>
        )}
      </div>

       <div className="mt-16 text-center bg-black/30 p-8 rounded-lg border border-brand-silver/20">
        <h2 className="font-sans text-2xl font-bold text-white mb-4">Don't see what you're looking for?</h2>
        <p className="text-brand-silver mb-6">Our expertise is vast. If you have a specific need or a custom project in mind, get in touch with our AI assistant or contact us directly.</p>
        <a href="#/contact" className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">
          Contact Our Experts
        </a>
      </div>
    </div>
  );
};

export default Services;