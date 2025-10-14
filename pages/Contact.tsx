import React from 'react';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from './../components/icons/SolidIcons';

const Contact: React.FC = () => {
  return (
    <div>
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Contact Information</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          We are available to assist you. Please find our contact details and workshop hours below.
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

        <div className="bg-black/30 h-96 rounded-lg border border-weathered-brass/30 overflow-hidden">
            <iframe
                title="T&T Auto Repairs Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27649.65879796851!2d30.99337478054761!3d-30.00165977114221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef603d3a5a7d77b%3A0x685b88527a29f315!2sIsipingo%20Beach%2C%20Isipingo%20Rail%2C%204133!5e0!3m2!1sen!2sza!4v1716382582736!5m2!1sen!2sza"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(1) invert(1) contrast(0.8)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;