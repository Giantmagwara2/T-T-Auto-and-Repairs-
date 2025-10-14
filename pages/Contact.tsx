
import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './../components/icons/SolidIcons';

const Contact: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Nexus of Nexus</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Reach out through any channel. Our lines are always open, whether by voice, text, or digital smoke signal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="bg-black/30 p-8 rounded-lg border border-weathered-brass/30 space-y-8">
          <div>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Contact Details</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <PhoneIcon className="h-6 w-6 text-zulu-terracotta"/>
                <span className="text-gray-300">+27 (31) 555 0123 (Also on WhatsApp!)</span>
              </div>
              <div className="flex items-center gap-4">
                <EnvelopeIcon className="h-6 w-6 text-zulu-terracotta"/>
                <span className="text-gray-300">bookings@tandtauto.co.za</span>
              </div>
              <div className="flex items-start gap-4">
                <MapPinIcon className="h-6 w-6 text-zulu-terracotta mt-1"/>
                <span className="text-gray-300">123 Ocean Drive, Isipingo Beach<br/>Durban, KwaZulu-Natal, 4133</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-sans text-2xl font-bold text-white mb-4">Workshop Hours</h2>
            <div className="space-y-2 text-gray-300">
               <div className="flex justify-between"><span>Monday - Friday:</span> <span>07:30 - 17:30</span></div>
               <div className="flex justify-between"><span>Saturday:</span> <span>08:00 - 13:00</span></div>
               <div className="flex justify-between"><span>Sunday & Public Holidays:</span> <span>Closed (On call for emergencies)</span></div>
            </div>
          </div>
        </div>

        <div className="bg-black/30 h-96 rounded-lg border border-weathered-brass/30 flex items-center justify-center">
            {/* Placeholder for an interactive map */}
            <p className="text-gray-500">Interactive Map Loading...</p>
            {/* In a real app, you would use Google Maps API or similar here */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
