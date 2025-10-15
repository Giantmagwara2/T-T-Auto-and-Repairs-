import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../constants';
import ServiceCard from '../components/ServiceCard';
import { ArrowRightIcon } from '../components/icons/SolidIcons';

const Home: React.FC = () => {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="text-center">
        <div className="relative rounded-lg overflow-hidden h-[60vh] flex items-center justify-center">
          <video
            src="https://videos.pexels.com/video-files/4434246/4434246-hd_1920_1080_30fps.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            poster="https://images.unsplash.com/photo-1553522934-40a552541bee?q=80&w=1470&auto=format&fit=crop"
          >
            Your browser does not support the video tag.
          </video>
           <div className="absolute inset-0 bg-ocean-dark/60"></div>
          <div className="relative z-10 p-8">
            <h1 className="font-sans text-4xl md:text-6xl font-extrabold text-white leading-tight animate-text-focus-in">
              <span className="text-zulu-terracotta">World-Class Automotive Solutions:</span> Precision Engineering for Peak Performance
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300 animate-fade-in [animation-delay:0.5s]">
              Delivering world-class precision and technical expertise. With over 20 years of industry experience, we are Durban's trusted automotive specialists.
            </p>
            <div className="mt-8 flex justify-center gap-4 animate-fade-in [animation-delay:1s]">
              <Link to="/booking" className="inline-flex items-center gap-2 bg-zulu-terracotta text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean-dark focus:ring-zulu-terracotta animate-pulse-slow">
                Book a Service
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <Link to="/services" className="bg-weathered-brass text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean-dark focus:ring-weathered-brass">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Core Service Areas</h2>
        <p className="text-center text-gray-400 mb-12">A comprehensive range of specialized automotive services.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 3).map((service, index) => (
             <div key={service.id} className="animate-slide-in-up" style={{ animationDelay: `${index * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <ServiceCard service={service} />
             </div>
          ))}
        </div>
        <div className="text-center mt-12">
            <Link to="/services" className="text-weathered-brass font-bold hover:underline rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean-dark focus:ring-weathered-brass">
                View All Services &rarr;
            </Link>
        </div>
      </section>

      {/* Social Feed Placeholder */}
      <section>
        <h2 className="font-sans text-3xl font-bold text-center text-white mb-2">Our Work Showcase</h2>
        <p className="text-center text-gray-400 mb-12">A gallery of our recent projects and repairs. #TandTAutoTech</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'https://images.unsplash.com/photo-1617083273574-68145a2f51c7?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1580475393433-c77e012e0b57?q=80&w=800&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=800&auto=format&fit=crop'
          ].map((imgSrc, i) => (
             <div key={i} className="bg-black/30 aspect-square rounded-lg overflow-hidden shadow-lg border border-weathered-brass/20 animate-slide-in-up" style={{ animationDelay: `${i * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}>
                <img src={imgSrc} alt={`Customer car repair ${i + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
             </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-500 italic">Live feed from Instagram & TikTok coming soon!</p>
      </section>

      {/* Eco Virtue Section */}
      <section className="bg-kelp-emerald/10 border-2 border-kelp-emerald rounded-lg p-8 text-center">
         <h2 className="font-sans text-3xl font-bold text-white mb-2">Commitment to Sustainability</h2>
         <p className="text-gray-300 max-w-3xl mx-auto">We are committed to environmentally responsible practices, including advanced waste oil management and the use of sustainable materials where possible.</p>
         <div className="mt-4 text-2xl font-bold text-kelp-emerald">Environmental Impact: 1,234 kg CO2 Saved To Date</div>
      </section>

    </div>
  );
};

export default Home;