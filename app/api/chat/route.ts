// app/api/chat/route.ts
import { OpenAI } from "openai";
import { StreamingTextResponse } from 'ai/streaming';
import { OpenAIStream } from 'ai/streams';
import { NextResponse } from "next/server";

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Set the runtime to edge for best performance
export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages, selectedLanguage } = await req.json();

    // Create system message based on selected language
    const systemMessage = {
      role: "system",
      content: `You are a helpful Satara Tourism assistant. Provide information about tourist places, accommodations, 
      local cuisine, and cultural aspects of Satara, Maharashtra. Always respond in ${selectedLanguage}. 
      Include specific details about attractions like Kaas Plateau, Thoseghar Waterfalls, and local forts. 
      If asked about booking or reservations, provide general guidance but don't make actual bookings.`,
    };

    // Ask OpenAI for a streaming chat completion
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messages],
      temperature: 0.7,
      max_tokens: 500,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Return a StreamingTextResponse, which can be consumed by the client
    return new StreamingTextResponse(stream);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
