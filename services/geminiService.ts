import { GoogleGenAI, Type } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export interface GeneratedSummary {
  title: string;
  summary: string;
  tags: string[];
}

export const generatePressSummary = async (text: string): Promise<GeneratedSummary> => {
  if (!apiKey) {
    throw new Error("API Key not found");
  }

  const model = "gemini-2.5-flash";

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Summarize the following press article text for a minimalist blog. 
      Return a JSON object with a catchy 'title', a concise 'summary' (max 3 sentences), and an array of 3 'tags'.
      
      Article Text:
      ${text}`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            summary: { type: Type.STRING },
            tags: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            }
          },
          required: ["title", "summary", "tags"]
        }
      }
    });

    const resultText = response.text;
    if (!resultText) {
       throw new Error("No response text from Gemini");
    }

    return JSON.parse(resultText) as GeneratedSummary;

  } catch (error) {
    console.error("Error generating summary:", error);
    throw error;
  }
};