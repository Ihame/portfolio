import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_API_KEY;

if (!API_KEY) {
  console.warn("Gemini API key (process.env.VITE_API_KEY) is not set. AI features will not work.");
}

const ai = new GoogleGenerativeAI({ apiKey: API_KEY });

export const generateCreativeSpark = async (): Promise<string> => {
  if (!API_KEY) {
    throw new Error("Gemini API Key (API_KEY) is not configured. Please set it in your environment variables.");
  }

  try {
    const model = ai.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(
      "Generate a short, fun, creative prompt for a unique side project or a small app idea. Make it inspiring and actionable. Max 2 sentences."
    );
    const response = await result.response;
    const text = response.text();

    return text.trim();
  } catch (error: any) {
    console.error("Error calling Gemini API:", error);
    throw new Error(`Failed to generate content from Gemini API: ${error.message}`);
  }
};
