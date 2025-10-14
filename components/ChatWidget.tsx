import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage, MessageSender } from '../types';
import { getGeminiChatResponse } from '../services/geminiService';
import { ChatBubbleLeftRightIcon, PaperAirplaneIcon, XMarkIcon, MicrophoneIcon, SpeakerWaveIcon } from './icons/SolidIcons';
import { useVoiceRecognition } from '../hooks/useVoiceRecognition';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBoxRef = useRef<HTMLDivElement>(null);

  const handleTranscript = (transcript: string) => {
    setUserInput(transcript);
    // Automatically send message after voice input
    sendMessage(transcript);
  };

  const { isListening, isAvailable, toggleListening } = useVoiceRecognition(handleTranscript);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsLoading(true);
      getGeminiChatResponse("Initial greeting").then((response) => {
        setMessages([{ sender: MessageSender.AI, text: response }]);
        setIsLoading(false);
      });
    }
  }, [isOpen]);

  useEffect(() => {
    chatBoxRef.current?.scrollTo(0, chatBoxRef.current.scrollHeight);
  }, [messages]);

  const sendMessage = async (messageText: string) => {
    const text = messageText.trim();
    if (!text) return;

    const newMessages: ChatMessage[] = [...messages, { sender: MessageSender.USER, text }];
    setMessages(newMessages);
    setUserInput('');
    setIsLoading(true);

    const history = newMessages.map(m => `${m.sender}: ${m.text}`).join('\n');
    const aiResponse = await getGeminiChatResponse(history);
    
    setMessages([...newMessages, { sender: MessageSender.AI, text: aiResponse }]);
    setIsLoading(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(userInput);
  };
  
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 right-5 bg-kelp-emerald text-white p-4 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-110 z-50 animate-pulse-slow"
        aria-label="Open Chat"
      >
        <ChatBubbleLeftRightIcon className="h-8 w-8" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-5 right-5 w-full max-w-sm h-[70vh] max-h-[600px] flex flex-col bg-ocean-dark border-2 border-weathered-brass rounded-lg shadow-2xl z-50 animate-fade-in">
      <header className="flex items-center justify-between p-4 bg-black/50 border-b border-weathered-brass">
        <div className='flex items-center space-x-2'>
            <SpeakerWaveIcon className='h-6 w-6 text-kelp-emerald' />
            <h3 className="font-sans text-lg font-bold text-white">Sparky - Your AI Assistant</h3>
        </div>
        <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white" aria-label="Close chat">
          <XMarkIcon className="h-6 w-6" />
        </button>
      </header>

      <div ref={chatBoxRef} className="flex-1 p-4 overflow-y-auto space-y-4" role="log" aria-live="polite">
        {messages.map((msg, index) => (
          <div key={index} className={`flex items-end gap-2 ${msg.sender === MessageSender.USER ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs md:max-w-md lg:max-w-sm rounded-lg px-4 py-2 text-white ${msg.sender === MessageSender.USER ? 'bg-weathered-brass' : 'bg-kelp-emerald'}`}>
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-2 justify-start">
            <div className="max-w-xs md:max-w-md lg:max-w-sm rounded-lg px-4 py-2 bg-kelp-emerald">
              <div className="flex items-center justify-center space-x-1 h-6">
                <span className="sr-only">Sparky is typing...</span>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="p-4 bg-black/50 border-t border-weathered-brass">
        <form onSubmit={handleFormSubmit} className="flex items-center space-x-2">
          <label htmlFor="chat-input" className="sr-only">Ask Sparky anything</label>
          <input
            id="chat-input"
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            placeholder={isListening ? "Listening..." : "Ask me anything..."}
            className="flex-1 bg-gray-800 border border-gray-600 rounded-full py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-weathered-brass"
            disabled={isLoading || isListening}
            autoFocus
          />
          {isAvailable && (
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2 rounded-full transition-colors ${isListening ? 'bg-red-500 animate-pulse' : 'bg-zulu-terracotta hover:bg-red-700'}`}
              disabled={isLoading}
              aria-label="Use microphone"
            >
              <MicrophoneIcon className="h-6 w-6 text-white" />
            </button>
          )}
          <button
            type="submit"
            className="p-2 bg-zulu-terracotta rounded-full hover:bg-red-700 transition-colors disabled:bg-gray-600"
            disabled={isLoading || !userInput}
            aria-label="Send message"
          >
            <PaperAirplaneIcon className="h-6 w-6 text-white" />
          </button>
        </form>
      </footer>
    </div>
  );
};

export default ChatWidget;