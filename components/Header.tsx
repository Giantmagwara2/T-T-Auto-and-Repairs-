import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from './icons/SolidIcons';
import { LOGO_DATA_URL } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Get a Quote', path: '/quote' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-blue";
  const activeLinkClass = "bg-brand-blue text-white";
  const inactiveLinkClass = "text-brand-light hover:bg-brand-blue/20 hover:text-white";

  return (
    <header className="bg-brand-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-brand-blue/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/">
              <img className="h-16 w-auto" src={LOGO_DATA_URL} alt="T&T Auto Repairs & Diagnostics Logo" />
            </NavLink>
          </div>
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) => `${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-brand-silver hover:text-white hover:bg-brand-dark/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative h-6 w-6">
                 <Bars3Icon
                  className={`absolute h-6 w-6 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                  }`}
                  aria-hidden="true"
                />
                <XMarkIcon
                  className={`absolute h-6 w-6 transform transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-90 opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 border-t border-brand-blue/20' : 'max-h-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => `block ${linkClass} ${isActive ? activeLinkClass : inactiveLinkClass}`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;