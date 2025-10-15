import React from 'react';
import { CogIcon } from './icons/OutlineIcons';

interface SpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Spinner: React.FC<SpinnerProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-16 w-16',
  };

  return (
    <div role="status" className={`flex justify-center items-center ${className}`}>
      <CogIcon className={`animate-spin text-brand-blue ${sizeClasses[size]}`} />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spinner;
