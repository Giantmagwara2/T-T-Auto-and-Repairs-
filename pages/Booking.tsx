
import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleModel: '',
    vehicleYear: '',
    serviceType: '',
    preferredDate: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a real booking system like Calendly or a backend service.
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center max-w-lg mx-auto py-12 animate-fade-in">
        <h1 className="font-sans text-4xl font-bold text-kelp-emerald">Yebo! You're Booked In.</h1>
        <p className="text-gray-300 mt-4">Thank you, {formData.name}. We've received your request and will be in touch shortly via SMS or email to confirm your appointment. We're looking forward to seeing you and your {formData.vehicleMake} {formData.vehicleModel}.</p>
        <button onClick={() => setIsSubmitted(false)} className="mt-8 bg-weathered-brass text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-700">
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Symbiotic Commerce Crucible</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Secure your spot with our streamlined booking system. Use your voice or the form below.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 bg-black/30 p-8 rounded-lg border border-weathered-brass/30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">Phone Number</label>
            <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email Address</label>
          <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="vehicleMake" className="block text-sm font-medium text-gray-300">Vehicle Make</label>
            <input type="text" name="vehicleMake" id="vehicleMake" required value={formData.vehicleMake} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
          </div>
          <div>
            <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-300">Vehicle Model</label>
            <input type="text" name="vehicleModel" id="vehicleModel" required value={formData.vehicleModel} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
          </div>
          <div>
            <label htmlFor="vehicleYear" className="block text-sm font-medium text-gray-300">Year</label>
            <input type="number" name="vehicleYear" id="vehicleYear" required value={formData.vehicleYear} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
          </div>
        </div>

        <div>
          <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300">Service Required</label>
          <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass">
            <option value="">Select a service...</option>
            {SERVICES_DATA.map(service => (
              <option key={service.id} value={service.name}>{service.name}</option>
            ))}
            <option value="Other">Other (Please describe below)</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-300">Preferred Date</label>
          <input type="date" name="preferredDate" id="preferredDate" required value={formData.preferredDate} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass" />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">Additional Information</label>
          <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className="mt-1 block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass"></textarea>
        </div>

        <div>
          <button type="submit" className="w-full bg-zulu-terracotta text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105">
            Request Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default Booking;
