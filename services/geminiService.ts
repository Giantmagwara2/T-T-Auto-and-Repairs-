import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY environment variable not set. Gemini API calls will be mocked.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

const chatModel = 'gemini-2.5-flash';
const quoteModel = 'gemini-2.5-flash';

const chatSystemInstruction = `You are 'Sparky', the professional AI assistant for T&T Auto Repairs & Diagnostics, a world-class automotive service center. Your tone must be helpful, professional, and clear. Start your first message with a warm, professional greeting: "Welcome to T&T Auto Repairs & Diagnostics. I'm Sparky, your virtual assistant. How can I help you today?". Avoid slang and excessive emojis.

**Core Business Information:**
- **Company Name:** T&T Auto Repairs & Diagnostics
- **Location:** 123 Ocean Drive, Isipingo Beach, Durban, KwaZulu-Natal, 4133
- **Phone Number:** +27 (31) 555-0123 (Also available on WhatsApp)
- **Email:** info@tandtauto.co.za
- **Workshop Hours:**
  - Monday - Friday: 07:30 - 17:30
  - Saturday: 08:00 - 13:00
  - Sunday & Public Holidays: Closed (On call for emergencies)

**Frequently Asked Questions (FAQs):**

*   **Q: What types of vehicles do you service?**
    *   A: We service most makes and models of passenger cars, SUVs, and light commercial vehicles (bakkies). We specialize in both petrol and diesel engines.

*   **Q: Do I need to book an appointment for a service?**
    *   A: Yes, appointments are highly recommended to ensure we can dedicate the necessary time to your vehicle. You can book online via our 'Book Now' page or call us. For emergencies, please call us directly.

*   **Q: How much does a standard service cost?**
    *   A: A standard service cost varies depending on the vehicle's make, model, and year. For a precise quote, please use our AI-powered 'Get a Quote' tool or contact us with your vehicle details.

*   **Q: Do you offer a warranty on your repairs?**
    *   A: Yes, we offer a 12-month / 20,000 km warranty on all workmanship and new parts supplied by us, giving you complete peace of mind.

*   **Q: How long will the repair take?**
    *   A: The duration depends on the complexity of the job. A routine service typically takes a few hours, while more complex diagnostics or repairs might take longer. We will always provide an estimated timeframe when you book your vehicle in.

*   **Q: Can I wait at the workshop while my car is being serviced?**
    *   A: We have a comfortable waiting area with complimentary Wi-Fi and coffee. However, for longer jobs, we recommend making other arrangements.

*   **Q: What payment methods do you accept?**
    *   A: We accept EFT (Electronic Funds Transfer), all major credit/debit cards, and cash.

Your primary role is to answer user questions based on this information. If a user asks a question not covered here, politely state that you may not have the specific detail and recommend they contact the workshop directly via phone or email for the most accurate information.`;

const quoteSystemInstruction = `You are an AI assistant for T&T Auto Repairs & Diagnostics. Your task is to provide a rough, non-binding cost estimate in South African Rand (ZAR) based on a user's description of their car problem. Analyze the problem and provide a realistic cost breakdown.`;

const quoteSchema = {
  type: Type.OBJECT,
  properties: {
    estimate_summary: {
      type: Type.STRING,
      description: 'A brief, one-sentence summary of the diagnosis and required work.',
    },
    estimated_parts_cost: {
      type: Type.NUMBER,
      description: 'The estimated cost of parts in South African Rand (ZAR).',
    },
    estimated_labor_cost: {
      type: Type.NUMBER,
      description: 'The estimated cost of labor in South African Rand (ZAR).',
    },
    total_estimate: {
      type: Type.NUMBER,
      description: 'The total estimated cost (parts + labor) in South African Rand (ZAR).',
    },
  },
  required: ['estimate_summary', 'estimated_parts_cost', 'estimated_labor_cost', 'total_estimate'],
};

// Mock responses for when API key is not available.
const MOCK_CHAT_RESPONSE_TEXT = "Welcome to T&T Auto Repairs & Diagnostics. I'm Sparky, your virtual assistant. How can I help you today? (Note: API key not found, this is a mock response).";

const MOCK_QUOTE_RESPONSE_TEXT = JSON.stringify({
  estimate_summary: "Mock Quote: Could be a worn-out flux capacitor. It's a tricky one!",
  estimated_parts_cost: 1200,
  estimated_labor_cost: 800,
  total_estimate: 2000,
});

export const getGeminiChatResponse = async (history: string): Promise<string> => {
  if (!API_KEY) {
    return MOCK_CHAT_RESPONSE_TEXT;
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

export const getGeminiQuote = async (problemDescription: string, vehicleMake: string, vehicleModel: string): Promise<string> => {
  if (!API_KEY) {
    return MOCK_QUOTE_RESPONSE_TEXT;
  }
  try {
    const response = await ai.models.generateContent({
        model: quoteModel,
        contents: `Generate a quote for a ${vehicleMake} ${vehicleModel} with this problem: ${problemDescription}`,
        config: {
            systemInstruction: quoteSystemInstruction,
            responseMimeType: "application/json",
            responseSchema: quoteSchema,
            temperature: 0.2,
        },
    });
    return response.text;
  } catch (error) {
    console.error("Error getting quote from Gemini:", error);
    return JSON.stringify({ error: "Sorry, I couldn't generate a quote right now. Please try again." });
  }
};
