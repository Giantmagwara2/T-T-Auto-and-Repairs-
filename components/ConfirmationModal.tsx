import React, { ReactNode } from 'react';
import { XMarkIcon, CheckIcon } from './icons/SolidIcons';

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  children: ReactNode;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, onClose, onConfirm, title, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="bg-brand-dark w-full max-w-md m-4 p-6 rounded-lg shadow-2xl border-2 border-brand-blue/50 transform transition-all animate-slide-in-up">
        <div className="flex items-start justify-between">
          <h2 id="modal-title" className="font-sans text-2xl font-bold text-white">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-brand-silver hover:bg-gray-700 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="mt-4">
          {children}
        </div>
        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md text-sm font-bold bg-gray-600 text-white hover:bg-gray-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold bg-kelp-emerald text-white hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-kelp-emerald"
          >
            <CheckIcon className="h-5 w-5" />
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;