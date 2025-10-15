import React, { useState } from 'react';
import { SERVICES_DATA } from '../constants';
import ConfirmationModal from '../components/ConfirmationModal';

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
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone Number is required.';
    } else if (!/^\+?\d{10,15}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number.';
    }
    
    if (!formData.vehicleMake.trim()) newErrors.vehicleMake = 'Vehicle Make is required.';
    if (!formData.vehicleModel.trim()) newErrors.vehicleModel = 'Vehicle Model is required.';
    
    if (!formData.vehicleYear.trim()) {
      newErrors.vehicleYear = 'Year is required.';
    } else if (isNaN(parseInt(formData.vehicleYear)) || parseInt(formData.vehicleYear) < 1900 || parseInt(formData.vehicleYear) > new Date().getFullYear() + 1) {
      newErrors.vehicleYear = 'Please enter a valid year.';
    }

    if (!formData.serviceType) newErrors.serviceType = 'Please select a service.';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a preferred date.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prevErrors => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsModalOpen(true);
    }
  };

  const handleConfirmBooking = () => {
    // This is the actual submission logic
    console.log('Booking submitted:', formData);
    setIsSubmitted(true);
    setIsModalOpen(false);
  };
  
  const inputStyle = 'mt-1 block w-full bg-brand-dark/50 border rounded-md shadow-sm text-white focus:ring-brand-blue focus:border-brand-blue';

  if (isSubmitted) {
    return (
      <div className="text-center max-w-lg mx-auto py-12 animate-fade-in">
        <h1 className="font-sans text-4xl font-bold text-brand-blue">Booking Request Submitted</h1>
        <p className="text-brand-silver mt-4">Thank you, {formData.name}. We have received your booking request for your {formData.vehicleMake} {formData.vehicleModel}. A member of our team will contact you shortly to confirm your appointment details.</p>
        <button onClick={() => {
          setIsSubmitted(false);
          setFormData({
            name: '', phone: '', email: '', vehicleMake: '', vehicleModel: '',
            vehicleYear: '', serviceType: '', preferredDate: '', message: ''
          });
        }} className="mt-8 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600">
          Make Another Booking
        </button>
      </div>
    );
  }

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Schedule an Appointment</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-silver">
          Please use the form below to request an appointment. Our team will contact you to confirm the date and time.
        </p>
      </div>

      <div className="bg-black/30 p-8 rounded-lg border border-brand-silver/20">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-brand-light">Full Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className={`${inputStyle} ${errors.name ? 'border-red-500' : 'border-brand-silver/30'}`} />
              {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-brand-light">Phone Number</label>
              <input type="tel" name="phone" id="phone" required value={formData.phone} onChange={handleChange} className={`${inputStyle} ${errors.phone ? 'border-red-500' : 'border-brand-silver/30'}`} />
              {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-light">Email Address</label>
            <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className={`${inputStyle} ${errors.email ? 'border-red-500' : 'border-brand-silver/30'}`} />
            {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="vehicleMake" className="block text-sm font-medium text-brand-light">Vehicle Make</label>
              <input type="text" name="vehicleMake" id="vehicleMake" required value={formData.vehicleMake} onChange={handleChange} className={`${inputStyle} ${errors.vehicleMake ? 'border-red-500' : 'border-brand-silver/30'}`} />
              {errors.vehicleMake && <p className="mt-1 text-sm text-red-400">{errors.vehicleMake}</p>}
            </div>
            <div>
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-brand-light">Vehicle Model</label>
              <input type="text" name="vehicleModel" id="vehicleModel" required value={formData.vehicleModel} onChange={handleChange} className={`${inputStyle} ${errors.vehicleModel ? 'border-red-500' : 'border-brand-silver/30'}`} />
              {errors.vehicleModel && <p className="mt-1 text-sm text-red-400">{errors.vehicleModel}</p>}
            </div>
            <div>
              <label htmlFor="vehicleYear" className="block text-sm font-medium text-brand-light">Year</label>
              <input type="number" name="vehicleYear" id="vehicleYear" required value={formData.vehicleYear} onChange={handleChange} className={`${inputStyle} ${errors.vehicleYear ? 'border-red-500' : 'border-brand-silver/30'}`} />
              {errors.vehicleYear && <p className="mt-1 text-sm text-red-400">{errors.vehicleYear}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="serviceType" className="block text-sm font-medium text-brand-light">Service Required</label>
            <select id="serviceType" name="serviceType" required value={formData.serviceType} onChange={handleChange} className={`${inputStyle} ${errors.serviceType ? 'border-red-500' : 'border-brand-silver/30'}`}>
              <option value="">Select a service...</option>
              {SERVICES_DATA.map(service => (
                <option key={service.id} value={service.name}>{service.name}</option>
              ))}
              <option value="Other">Other (Please describe below)</option>
            </select>
            {errors.serviceType && <p className="mt-1 text-sm text-red-400">{errors.serviceType}</p>}
          </div>
          
          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-brand-light">Preferred Date</label>
            <input type="date" name="preferredDate" id="preferredDate" required value={formData.preferredDate} onChange={handleChange} className={`${inputStyle} ${errors.preferredDate ? 'border-red-500' : 'border-brand-silver/30'}`} />
            {errors.preferredDate && <p className="mt-1 text-sm text-red-400">{errors.preferredDate}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-brand-light">Additional Information</label>
            <textarea id="message" name="message" rows={4} value={formData.message} onChange={handleChange} className={`${inputStyle} border-brand-silver/30`}></textarea>
          </div>

          <div>
            <button type="submit" className="w-full bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Request Booking
            </button>
          </div>
        </form>
        <p className="text-xs text-brand-silver text-center mt-4">
          Please note: Submitting this form is a request for an appointment. A team member will contact you to confirm your booking details.
        </p>
      </div>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmBooking}
        title="Confirm Booking Request"
      >
        <p className="text-sm text-brand-silver">
          You are about to request a booking for a <span className="font-bold text-white">{formData.serviceType || 'service'}</span> for your 
          <span className="font-bold text-white"> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</span> on
          <span className="font-bold text-white"> {formData.preferredDate}</span>.
          <br/><br/>
          Please ensure your contact details are correct so our team can reach you.
        </p>
      </ConfirmationModal>
    </div>
  );
};

export default Booking;