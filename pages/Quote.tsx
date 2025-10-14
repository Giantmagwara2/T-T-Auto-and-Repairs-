import React, { useState } from 'react';
import { getGeminiQuote } from '../services/geminiService';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';
import { MicrophoneIcon, PaperAirplaneIcon } from '../components/icons/SolidIcons';
import ConfirmationModal from '../components/ConfirmationModal';

interface QuoteResult {
    estimate_summary: string;
    estimated_parts_cost: number;
    estimated_labor_cost: number;
    total_estimate: number;
    error?: string;
}

const Quote: React.FC = () => {
  const [problemDescription, setProblemDescription] = useState('');
  const [quote, setQuote] = useState<QuoteResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleTranscript = (transcript: string) => {
    setProblemDescription(transcript);
  };
  
  const { isListening, isAvailable, toggleListening } = useVoiceRecognition(handleTranscript);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!problemDescription.trim()) {
      setError('Please describe the problem.');
      return;
    }
    setError('');
    // Open the confirmation modal
    setIsModalOpen(true);
  };

  const handleConfirmQuote = async () => {
    setIsModalOpen(false);
    setIsLoading(true);
    setQuote(null);
    try {
      const responseText = await getGeminiQuote(problemDescription);
      const parsedQuote = JSON.parse(responseText);
      setQuote(parsedQuote);
    } catch (err) {
      setError('There was an error generating your quote. The AI might be on a tea break. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-fade-in max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="font-sans text-4xl md:text-5xl font-extrabold text-white">AI-Powered Estimate Tool</h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
          Describe your vehicle's issue to receive an instant, AI-generated preliminary cost estimate.
        </p>
      </div>

      <div className="bg-black/30 p-8 rounded-lg border border-weathered-brass/30">
        <form onSubmit={handleSubmit}>
          <label htmlFor="problemDescription" className="block text-sm font-medium text-gray-300 mb-2">Describe the issue with your vehicle</label>
          <div className="relative">
            <textarea
              id="problemDescription"
              rows={6}
              value={problemDescription}
              onChange={(e) => setProblemDescription(e.target.value)}
              placeholder="e.g., 'There's a clicking sound when I turn left, and the engine is making a whirring noise after driving on the M4...'"
              className="block w-full bg-gray-800 border-gray-600 rounded-md shadow-sm text-white focus:ring-weathered-brass focus:border-weathered-brass pr-12"
            />
            {isAvailable && (
              <button
                type="button"
                onClick={toggleListening}
                className={`absolute top-3 right-3 p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 animate-pulse' : 'bg-zulu-terracotta hover:bg-red-700'}`}
                aria-label="Use microphone"
              >
                <MicrophoneIcon className="h-5 w-5 text-white" />
              </button>
            )}
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="mt-4 w-full flex items-center justify-center gap-2 bg-zulu-terracotta text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-transform transform hover:scale-105 disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Analyzing Data...' : 'Generate Quote'}
            {!isLoading && <PaperAirplaneIcon className="h-5 w-5" />}
          </button>
          {error && <p className="text-red-400 mt-2 text-sm">{error}</p>}
        </form>
      </div>

      {isLoading && (
        <div className="text-center mt-8" role="status" aria-live="polite">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-weathered-brass"></div>
            <p className="text-gray-400 mt-2">
              <span className="sr-only">Loading.</span>
              Generating your estimate...
            </p>
        </div>
      )}

      {quote && !isLoading && (
        <div className="mt-8 bg-kelp-emerald/10 p-8 rounded-lg border-2 border-kelp-emerald animate-fade-in" aria-live="polite">
          <h2 className="font-sans text-2xl font-bold text-white mb-4">Your AI-Generated Estimate</h2>
          {quote.error ? (
             <p className="text-red-400">{quote.error}</p>
          ) : (
            <>
                <p className="text-gray-300 italic mb-4">"{quote.estimate_summary}"</p>
                <div className="space-y-2 text-lg">
                    <div className="flex justify-between"><span className="text-gray-400">Estimated Parts:</span> <span className="font-bold text-white">R {quote.estimated_parts_cost?.toFixed(2)}</span></div>
                    <div className="flex justify-between"><span className="text-gray-400">Estimated Labor:</span> <span className="font-bold text-white">R {quote.estimated_labor_cost?.toFixed(2)}</span></div>
                    <div className="flex justify-between text-2xl border-t-2 border-weathered-brass mt-4 pt-2"><span className="text-weathered-brass font-bold">Total Estimate:</span> <span className="font-bold text-weathered-brass">R {quote.total_estimate?.toFixed(2)}</span></div>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                    <strong>Disclaimer:</strong> This is a preliminary, non-binding estimate generated by an AI based on your description. Actual costs may vary after a physical inspection by our expert technicians.
                </p>
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
        <p className="text-sm text-gray-300">This will submit your description to our AI to generate a preliminary cost estimate. This is not a formal quote.<br/><br/>Do you want to proceed?</p>
      </ConfirmationModal>
    </div>
  );
};

export default Quote;