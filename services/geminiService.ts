import { GoogleGenAI } from "@google/genai";

// Ensure API key is available
const apiKey = process.env.API_KEY || '';

const ai = new GoogleGenAI({ apiKey });

export const generateCreativeIdea = async (topic: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure your environment.";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Generate a unique, avant-garde creative project idea based on the topic: "${topic}". 
      Keep it concise (under 50 words), inspiring, and abstract. 
      Format: "Title: [Title] \n Concept: [Concept]"`,
      config: {
        temperature: 0.9,
      }
    });

    return response.text || "Could not generate an idea at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the creative mind.";
  }
};
