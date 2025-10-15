import React from 'react';
import Accordion from '../components/Accordion';

const faqs = {
  "General Questions": [
    {
      question: "What types of vehicles do you service?",
      answer: "We service most makes and models of passenger cars, SUVs, and light commercial vehicles (bakkies). We specialize in both petrol and diesel engines and have extensive experience with European, Asian, and local brands."
    },
    {
      question: "Do you offer a warranty on your repairs?",
      answer: "Absolutely. We stand by our work. We offer a 12-month / 20,000 km warranty on all workmanship and on any new parts that we supply, giving you complete peace of mind."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept EFT (Electronic Funds Transfer), all major credit and debit cards, and cash."
    }
  ],
  "Booking & Appointments": [
    {
      question: "Do I need to book an appointment?",
      answer: "Yes, appointments are highly recommended to ensure we can provide you and your vehicle with our full attention. You can book online through our 'Book Now' page, or by calling us directly. For emergencies, please call us immediately."
    },
    {
      question: "How long will the service or repair take?",
      answer: "The duration depends on the scope of work. A routine oil change might take an hour, a major service can take a few hours, while complex diagnostics and repairs may require more time. We will always provide an estimated timeframe when you book in."
    },
    {
      question: "Can I wait while my car is being serviced?",
      answer: "Yes, we have a comfortable customer waiting area with complimentary Wi-Fi and coffee. For more extensive repairs, we recommend arranging for alternative transport."
    }
  ],
  "Pricing & Estimates": [
    {
      question: "How much does a standard service cost?",
      answer: "The cost of a service varies significantly depending on your vehicle's make, model, age, and mileage, as well as the specific service schedule recommended by the manufacturer. For an accurate price, please use our 'Get a Quote' tool or contact us."
    },
    {
      question: "Is the AI-generated quote final?",
      answer: "The AI quote is a preliminary estimate based on the description you provide. While it is a powerful tool for getting a quick idea of costs, the final price can only be confirmed after a physical inspection of the vehicle by our technicians."
    }
  ]
};

const FAQ: React.FC = () => {
  return (
    <div className="animate-fade-in max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">Frequently Asked Questions</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-silver">
          Find quick answers to common questions about our services, booking process, and pricing.
        </p>
      </div>

      <div className="space-y-12">
        {Object.entries(faqs).map(([category, questions], categoryIndex) => (
          <div key={category} className="animate-slide-in-up" style={{ animationDelay: `${categoryIndex * 150}ms`, opacity: 0, animationFillMode: 'forwards' }}>
            <h2 className="font-sans text-2xl font-bold text-brand-blue mb-6 border-b-2 border-brand-blue/30 pb-2">{category}</h2>
            <div className="space-y-4">
              {questions.map((faq, index) => (
                <Accordion key={index} title={faq.question}>
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center bg-black/30 p-8 rounded-lg border border-brand-silver/20">
        <h2 className="font-sans text-2xl font-bold text-white mb-4">Still have questions?</h2>
        <p className="text-brand-silver mb-6">Our AI assistant, Sparky, is available 24/7 in the chat widget, or you can contact our expert team directly.</p>
        <a href="#/contact" className="bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default FAQ;