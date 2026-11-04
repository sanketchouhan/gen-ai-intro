import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const interaction = await ai.interactions.create({
  model: "gemini-3.5-flash-lite",
  input: [
    {
      type: "user_input",
      content: [{ type: "text", text: "I have 2 dogs in my house." }],
    },
  ],
});

console.log(interaction.output_text);
