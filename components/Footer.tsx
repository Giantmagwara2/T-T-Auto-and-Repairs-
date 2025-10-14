
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 text-gray-400 mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">T&T Auto Repairs & Diagnostics</h3>
            <p className="text-sm">Igniting Durban's Drives with Zulu-Spirit Precision, Eco-Edge Expertise, and 24/7 Coastal Cadence.</p>
            <p className="text-sm mt-2">Isipingo Beach, Durban, KZN</p>
          </div>
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:text-zulu-terracotta transition-colors">Our Services</a></li>
              <li><a href="#/quote" className="hover:text-zulu-terracotta transition-colors">Get a Quote</a></li>
              <li><a href="#/contact" className="hover:text-zulu-terracotta transition-colors">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Connect With Us</h3>
            <p className="text-sm">Follow our journey and see our work on social media. #TandTideTriumphs</p>
            {/* Placeholder for social icons */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} T&T Auto Repairs & Diagnostics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
