import React from 'react';
import { FacebookIcon, InstagramIcon, TikTokIcon } from './icons/SocialIcons';
import { LOGO_DATA_URL } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black/50 text-brand-silver mt-12">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={LOGO_DATA_URL} alt="T&T Auto Repairs & Diagnostics Logo" className="w-48 mb-4" />
            <p className="text-sm">Providing world-class automotive repair and diagnostic services with a commitment to technical excellence and customer satisfaction.</p>
            <p className="text-sm mt-2">Isipingo Beach, Durban, KZN</p>
          </div>
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#/services" className="hover:text-brand-blue transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">Our Services</a></li>
              <li><a href="#/faq" className="hover:text-brand-blue transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">FAQ</a></li>
              <li><a href="#/quote" className="hover:text-brand-blue transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">Get a Quote</a></li>
              <li><a href="#/contact" className="hover:text-brand-blue transition-colors rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-sans text-xl font-bold text-white mb-4">Connect With Us</h3>
            <p className="text-sm mb-4">Follow our journey and see our work on social media. #TandTAutoTech</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-brand-silver hover:text-brand-blue transition-transform transform hover:scale-110">
                <FacebookIcon className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-brand-silver hover:text-brand-blue transition-transform transform hover:scale-110">
                <InstagramIcon className="h-6 w-6" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-brand-silver hover:text-brand-blue transition-transform transform hover:scale-110">
                <TikTokIcon className="h-6 w-6" />
              </a>
            </div>
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