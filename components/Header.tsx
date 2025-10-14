import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { CogIcon } from './icons/OutlineIcons';
import { Bars3Icon, XMarkIcon } from './icons/SolidIcons';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Get a Quote', path: '/quote' },
    { name: 'Book Now', path: '/booking' },
    { name: 'Contact', path: '/contact' },
  ];

  const linkClass = "px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wider transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-ocean-dark focus:ring-zulu-terracotta";
  const activeLinkClass = "bg-zulu-terracotta text-white";
  const inactiveLinkClass = "text-gray-300 hover:bg-weathered-brass hover:text-white";

  return (
    <header className="bg-ocean-dark/80 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-weathered-brass/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center space-x-2 text-white">
              <CogIcon className="h-10 w-10 text-weathered-brass animate-spin [animation-duration:10s]" />
              <span className="font-sans text-2xl font-bold">T&T Auto</span>
            </NavLink>
          </div>
          <div className="hidden md:block">
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
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
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
      )}
    </header>
  );
};

export default Header;