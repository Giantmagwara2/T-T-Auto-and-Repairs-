
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowRightIcon } from '../components/icons/SolidIcons';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-20">
        <div className="relative">
          {/* Placeholder for WebGL/Three.js bakkie. A static image is used as a fallback. */}
          <img src="https://picsum.photos/seed/bakkie/1200/600" alt="Custom bakkie against a Durban sunrise" className="absolute inset-0 w-full h-full object-cover opacity-20 blur-sm"/>
          <div className="relative z-10 p-8">
            <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-white leading-tight">
              <span className="text-zulu-terracotta">Unleash the Tide:</span> Igniting Durban's Drives
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
              Fusing Zulu-spirit precision with eco-edge expertise. Over 20 years of sand-to-speedway sagacity, right here in Isipingo Beach.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Link to="/booking" className="inline-flex items-center gap-2 bg-zulu-terracotta text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105">
                Book a Service
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link to="/services" className="bg-weathered-brass text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition-transform transform hover:scale-105">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Arsenal of Artistry</h2>
        <p className="text-center text-gray-400 mb-12">Precision services for every need.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/services" className="text-weathered-brass font-bold hover:underline">
                View All Services &rarr;
            </Link>
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Mosaic of Miracles</h2>
        <p className="text-center text-gray-400 mb-12">See our latest triumphs from the Durban streets. #TandTideTriumphs</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
             <div key={i} className="bg-black/30 aspect-square rounded-lg overflow-hidden shadow-lg border border-weathered-brass/20">
                <img src={`https://picsum.photos/seed/gallery${i}/400/400`} alt="Customer car repair" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
                {/* Juicer.io or Curator.io feed would be integrated here */}
             </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-500 italic">Live feed from Instagram & TikTok coming soon!</p>
      </section>

      {/* Eco Virtue Section */}
      <section className="bg-kelp-emerald/10 border-2 border-kelp-emerald rounded-lg p-8 text-center">
         <h2 className="font-sans text-3xl font-bold text-white mb-2">Driving a Greener Durban</h2>
         <p className="text-gray-300 max-w-3xl mx-auto">We're committed to sustainable practices, from zero-waste oil cycles to upcycled beach-plastic tools. Your repair helps us save on CO2 emissions and protect our beautiful coastline.</p>
         <div className="mt-4 text-2xl font-bold text-kelp-emerald">Repair Impact: 1,234 kg CO2 Saved</div>
      </section>

    </div>
  );
};

export default Home;
