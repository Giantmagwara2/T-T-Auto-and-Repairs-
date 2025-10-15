import React, { useState } from 'react';
import { getGeminiQuote } from '../services/geminiService';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { MicrophoneIcon, PaperAirplaneIcon, CogIcon, WrenchScrewdriverIcon } from '../components/icons/SolidIcons';
import ConfirmationModal from '../components/ConfirmationModal';

interface QuoteResult {
    estimate_summary: string;
    estimated_parts_cost: number;
    estimated_labor_cost: number;
    total_estimate: number;
    error?: string;
}

const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    problemDescription: '',
    vehicleMake: '',
    vehicleModel: '',
  });
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleTranscript = (transcript: string) => {
    setFormData(prev => ({ ...prev, problemDescription: transcript }));
  };
  
  const { isListening, isAvailable, toggleListening } = useVoiceRecognition(handleTranscript);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.problemDescription.trim() || !formData.vehicleMake.trim() || !formData.vehicleModel.trim()) {
      setError('Please fill in all fields: vehicle make, model, and problem description.');
      return;
    }
    setError('');
    setIsModalOpen(true);
  };

  const handleConfirmQuote = async () => {
    setIsModalOpen(false);
    setIsLoading(true);
    setQuote(null);
    try {
      const responseText = await getGeminiQuote(formData.problemDescription, formData.vehicleMake, formData.vehicleModel);
      const parsedQuote = JSON.parse(responseText);
      setQuote(parsedQuote);
    } catch (err) {
      setError('There was an error generating your quote. The AI might be on a tea break. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = 'block w-full bg-brand-dark/50 border border-brand-silver/30 rounded-md shadow-sm text-white focus:ring-brand-blue focus:border-brand-blue';

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">AI-Powered Estimate Tool</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-silver">
          Describe your vehicle's issue to receive an instant, AI-generated preliminary cost estimate.
        </p>
      </div>

      <div className="bg-black/30 p-8 rounded-lg border border-brand-silver/20">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                  <label htmlFor="vehicleMake" className="block text-sm font-medium text-brand-light mb-2">Vehicle Make</label>
                  <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      placeholder="e.g., Toyota"
                      className={inputStyle}
                  />
              </div>
              <div>
                  <label htmlFor="vehicleModel" className="block text-sm font-medium text-brand-light mb-2">Vehicle Model</label>
                  <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g., Hilux"
                      className={inputStyle}
                  />
              </div>
          </div>
          
          <div>
            <label htmlFor="problemDescription" className="block text-sm font-medium text-brand-light mb-2">Describe the issue</label>
            <div className="relative">
              <textarea
                id="problemDescription"
                name="problemDescription"
                rows={6}
                value={formData.problemDescription}
                onChange={handleChange}
                placeholder="e.g., 'There's a clicking sound when I turn left, and the engine is making a whirring noise after driving on the M4...'"
                className={`${inputStyle} pr-12`}
              />
              {isAvailable && (
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 animate-pulse' : 'bg-brand-blue hover:bg-blue-600'}`}
                  aria-label="Use microphone"
                >
                  <MicrophoneIcon className="h-5 w-5 text-white" />
                </button>
              )}
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="mt-6 w-full flex items-center justify-center gap-2 bg-brand-blue text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-transform transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Analyzing Data...' : 'Generate Estimate'}
            {!isLoading && <PaperAirplaneIcon className="h-5 w-5" />}
          </button>
          {error && <p className="text-red-400 mt-2 text-sm text-center">{error}</p>}
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-8" role="status" aria-live="polite">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-blue"></div>
            <p className="text-brand-silver mt-2">
              <span className="sr-only">Loading.</span>
              Generating your estimate...
            </p>
        </div>
      )}

      {quote && !isLoading && (
        <div className="mt-8 bg-brand-blue/10 p-6 sm:p-8 rounded-lg border-2 border-brand-blue/50 animate-fade-in" aria-live="polite">
          <h2 className="font-sans text-2xl font-bold text-white mb-4">Your AI-Generated Estimate</h2>
          {quote.error ? (
             <p className="text-red-400">{quote.error}</p>
          ) : (
            <>
                <div className="bg-black/20 p-4 rounded-md mb-6">
                  <p className="text-sm font-bold text-brand-silver uppercase tracking-wider">Initial Diagnosis</p>
                  <p className="text-brand-light italic mt-1">"{quote.estimate_summary}"</p>
                </div>
                
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-md">
                        <div className="flex items-center gap-3">
                            <CogIcon className="h-6 w-6 text-brand-blue" />
                            <span className="text-brand-silver">Estimated Parts Cost</span>
                        </div>
                        <span className="font-bold text-white text-lg">R {quote.estimated_parts_cost?.toFixed(2)}</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-black/20 rounded-md">
                        <div className="flex items-center gap-3">
                            <WrenchScrewdriverIcon className="h-6 w-6 text-brand-blue" />
                            <span className="text-brand-silver">Estimated Labor Cost</span>
                        </div>
                        <span className="font-bold text-white text-lg">R {quote.estimated_labor_cost?.toFixed(2)}</span>
                    </div>
                </div>
    
                <div className="flex justify-between items-center text-2xl border-t-2 border-brand-blue mt-6 pt-4">
                    <span className="text-brand-blue font-bold">Total Estimated Cost:</span>
                    <span className="font-bold text-brand-blue">R {quote.total_estimate?.toFixed(2)}</span>
                </div>
    
                <div className="mt-8 p-4 rounded-lg bg-brand-blue/10 border border-brand-blue/50">
                  <p className="text-sm font-bold text-brand-blue">Disclaimer: AI-Generated Estimate</p>
                  <p className="text-sm text-brand-silver mt-2">
                      This is a preliminary, non-binding estimate generated by an AI based on your description for a {formData.vehicleMake} {formData.vehicleModel}. Actual costs may vary and will only be confirmed after a physical inspection by our expert technicians. A formal quote will be provided for your approval before any work is undertaken.
                  </p>
                </div>
            </>
          )}
        </div>
      )}
       <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmQuote}
        title="Generate AI Estimate?"
      >
        <p className="text-sm text-brand-silver">This will submit your description to our AI to generate a preliminary cost estimate. This is not a formal quote.<br/><br/>Do you want to proceed?</p>
      </ConfirmationModal>
    </div>
  );
};

export default Quote;