import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA, LOGO_DATA_URL } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowRightIcon } from '../components/icons/SolidIcons';

const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <div className="relative rounded-lg overflow-hidden h-[70vh] flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1553941243-0f0a5a54e9a3?q=80&w=1470&auto=format&fit=crop"
            alt="High performance car engine"
            className="absolute inset-0 w-full h-full object-cover"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>
          <div className="relative z-10 p-8 flex flex-col items-center justify-center">
             <img src={LOGO_DATA_URL} alt="T&T Auto Repair Logo" className="w-48 md:w-64 drop-shadow-2xl" />
            <h1 className="font-sans text-2xl md:text-3xl font-extrabold text-white leading-tight animate-text-focus-in mt-4 tracking-widest uppercase" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
              Where Precision Meets Performance
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-silver animate-fade-in [animation-delay:0.5s]">
              Durban's trusted automotive specialists for maintenance, diagnostics, and performance tuning.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in [animation-delay:1s]">
              <Link to="/booking" className="inline-flex items-center gap-2 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue animate-pulse-slow">
                Book a Service
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link to="/services" className="bg-brand-silver/80 text-white font-bold py-3 px-6 rounded-lg hover:bg-brand-silver transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-silver">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Core Service Areas</h2>
        <p className="text-center text-brand-silver mb-12">A comprehensive range of specialized automotive services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service, index) => (
             <div key={service.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <ServiceCard service={service} />
             </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/services" className="text-brand-blue font-bold hover:underline rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">
                View All Services &rarr;
            </Link>
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Our Work Showcase</h2>
        <p className="text-center text-brand-silver mb-12">A gallery of our recent projects and repairs. #TandTAutoTech</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1571271518341-932f6a2a0e44?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1617154261453-277133fae23b?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1622059368398-54b9d5c3f2d2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1522881451255-f5f8b864e036?q=80&w=800&auto=format&fit=crop'
          ].map((imgSrc, i) => (
             <div key={i} className="bg-black/30 aspect-square rounded-lg overflow-hidden shadow-lg border border-brand-silver/20 animate-slide-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <img src={imgSrc} alt={`Customer car repair ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
             </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-500 italic">Live feed from Instagram & TikTok coming soon!</p>
      </section>

      {/* Eco Virtue Section */}
      <section className="bg-brand-blue/10 border-2 border-brand-blue rounded-lg p-8 text-center">
         <h2 className="font-sans text-3xl font-bold text-white mb-2">Commitment to Sustainability</h2>
         <p className="text-brand-light max-w-3xl mx-auto">We are committed to environmentally responsible practices, including advanced waste oil management and the use of sustainable materials where possible.</p>
         <div className="mt-4 text-2xl font-bold text-brand-blue">Environmental Impact: 1,234 kg CO2 Saved To Date</div>
      </section>

    </div>
  );
};

export default Home;