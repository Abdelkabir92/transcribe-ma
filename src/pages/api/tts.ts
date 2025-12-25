import OpenAI from "openai";

export async function POST({ request }) {
  const apiKey = import.meta.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing API Key", { status: 500 });

  const client = new OpenAI({ apiKey });

  const { text } = await request.json();

  const audio = await client.audio.speech.create({
    model: "gpt-4o-mini-tts",
    voice: "alloy",
    input: text
  });

  const buffer = Buffer.from(await audio.arrayBuffer());
  return new Response(buffer, {
    headers: { "Content-Type": "audio/mpeg" }
  });
}
