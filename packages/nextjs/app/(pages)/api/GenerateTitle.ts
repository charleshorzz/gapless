import { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { content } = req.body;

    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content: "Generate a concise, professional title for a job post based on this content. Max 10 words.",
        },
        {
          role: "user",
          content: content,
        },
      ],
      model: "gpt-3.5-turbo",
      temperature: 0.7,
      max_tokens: 50,
    });

    const title = completion.choices[0].message.content;
    res.status(200).json({ title });
  } catch (error) {
    console.error("OpenAI API error:", error);
    res.status(500).json({ error: "Error generating title" });
  }
}
