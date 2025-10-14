import React, { useState, ReactNode } from 'react';
import { ChevronDownIcon } from './icons/SolidIcons';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-weathered-brass/30 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 bg-black/30 hover:bg-weathered-brass/10 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h3 className="font-sans text-lg font-bold text-left text-white">{title}</h3>
        <ChevronDownIcon
          className={`h-6 w-6 text-weathered-brass transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <div className="p-4 bg-ocean-dark/50 text-gray-300">
                {children}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
