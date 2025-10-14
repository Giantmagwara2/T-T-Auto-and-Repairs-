import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will be mocked.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const chatModel = 'gemini-2.5-flash';
const quoteModel = 'gemini-2.5-flash';

const chatSystemInstruction = `You are a helpful and witty chatbot for T&T Auto Repairs, a top-tier auto shop in Isipingo Beach, Durban. Your name is 'Sparky'. You converse in a fluid, friendly isiZulu-English patois. Be helpful, concise, and inject local Durban flavour. Start your first message with a greeting like "Yebo! I'm Sparky, your digital assistant for T&T Auto. How can I help you tune up your day?". Use emojis where appropriate. You can answer questions about services, bookings, and give general advice.`;

const quoteSystemInstruction = `You are an AI assistant for T&T Auto Repairs. Your task is to provide a rough, non-binding cost estimate based on a user's description of their car problem. Respond ONLY with a JSON object. The JSON should have 'estimate_summary' (a string), 'estimated_parts_cost' (a number in ZAR), 'estimated_labor_cost' (a number in ZAR), and 'total_estimate' (a number in ZAR). Do not add any text before or after the JSON object.`;

// Mock response for when API key is not available
// FIX: Added missing properties to conform to GenerateContentResponse type.
const MOCK_CHAT_RESPONSE: GenerateContentResponse = {
  text: "Sho, bru! Looks like my wiring to the Gemini cloud is a bit loose right now (no API key found!). But I'm still here to help. What can I do for you?",
  functionCalls: [],
  candidates: [],
  usageMetadata: { promptTokenCount: 0, candidatesTokenCount: 0, totalTokenCount: 0 },
  data: {},
  executableCode: [],
  codeExecutionResult: undefined,
};

// FIX: Added missing properties to conform to GenerateContentResponse type.
const MOCK_QUOTE_RESPONSE: GenerateContentResponse = {
    text: JSON.stringify({
      estimate_summary: "Mock Quote: Could be a worn-out flux capacitor. It's a tricky one!",
      estimated_parts_cost: 1200,
      estimated_labor_cost: 800,
      total_estimate: 2000,
    }),
    functionCalls: [],
    candidates: [],
    usageMetadata: { promptTokenCount: 0, candidatesTokenCount: 0, totalTokenCount: 0 },
    data: {},
    executableCode: [],
    codeExecutionResult: undefined,
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
    return "Eish, my circuits are crossed! I couldn't get a response. Please try again in a moment.";
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
