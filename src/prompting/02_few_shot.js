import { GoogleGenAI } from "@google/genai";
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

const interaction = await ai.interactions.create({
  model: "gemini-3.5-flash-lite",
  input: [
    {
      type: "user_input",
      content: [
        {
          type: "text",
          text: `
        what is 2 + 5 equals?
        Do not add anything else in ans, take the samples from the examples.
        Examples:
        - what is 5 + 4?
          Expected Output: 9 (Nine)
        - What is 10 + 10?
          Expected Output: 20 (Twenty)
        `,
        },
      ],
    },
  ],
});

console.log(interaction.output_text);
