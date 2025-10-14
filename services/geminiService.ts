import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will be mocked.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const chatModel = 'gemini-2.5-flash';
const quoteModel = 'gemini-2.5-flash';

const chatSystemInstruction = `You are 'Sparky', the professional AI assistant for T&T Auto Repairs & Diagnostics, a world-class automotive service center. Your tone should be helpful, professional, and clear. Provide accurate information about services, booking procedures, and general vehicle maintenance. Start your first message with a clear and professional greeting like "Welcome to T&T Auto Repairs. I'm Sparky, your virtual assistant. How can I help you today?". Avoid slang, excessive emojis, and overly casual language.`;

const quoteSystemInstruction = `You are an AI assistant for T&T Auto Repairs. Your task is to provide a rough, non-binding cost estimate based on a user's description of their car problem. Respond ONLY with a JSON object. The JSON should have 'estimate_summary' (a string), 'estimated_parts_cost' (a number in ZAR), 'estimated_labor_cost' (a number in ZAR), and 'total_estimate' (a number in ZAR). Do not add any text before or after the JSON object.`;

// Mock response for when API key is not available
// FIX: Removed explicit `GenerateContentResponse` type from mock objects to resolve compilation errors due to missing properties. Since only the `.text` property is used, a complete mock is unnecessary.
const MOCK_CHAT_RESPONSE = {
  text: "Welcome to T&T Auto Repairs. I'm Sparky, your virtual assistant. How can I help you today? (Note: API key not found, this is a mock response).",
  functionCalls: [],
  candidates: [],
  usageMetadata: { promptTokenCount: 0, candidatesTokenCount: 0, totalTokenCount: 0 },
};

// FIX: Removed explicit `GenerateContentResponse` type from mock objects to resolve compilation errors due to missing properties. Since only the `.text` property is used, a complete mock is unnecessary.
const MOCK_QUOTE_RESPONSE = {
    text: JSON.stringify({
      estimate_summary: "Mock Quote: Could be a worn-out flux capacitor. It's a tricky one!",
      estimated_parts_cost: 1200,
      estimated_labor_cost: 800,
      total_estimate: 2000,
    }),
    functionCalls: [],
    candidates: [],
    usageMetadata: { promptTokenCount: 0, candidatesTokenCount: 0, totalTokenCount: 0 },
};

export const getGeminiChatResponse = async (history: string): Promise<string> => {
  if (!API_KEY) {
    return MOCK_CHAT_RESPONSE.text;
  }
  try {
    const response = await ai.models.generateContent({
      model: chatModel,
      contents: history,
      config: {
        systemInstruction: chatSystemInstruction,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting chat response from Gemini:", error);
    return "Apologies, I am currently unable to process your request. Please try again shortly.";
  }
};

export const getGeminiQuote = async (problemDescription: string): Promise<string> => {
  if (!API_KEY) {
    return MOCK_QUOTE_RESPONSE.text;
  }
  try {
    const response = await ai.models.generateContent({
        model: quoteModel,
        contents: `Generate a quote for this problem: ${problemDescription}`,
        config: {
            systemInstruction: quoteSystemInstruction,
            responseMimeType: "application/json",
            temperature: 0.2,
        },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting quote from Gemini:", error);
    return JSON.stringify({ error: "Sorry, I couldn't generate a quote right now. Please try again." });
  }
};