import { OpenAI } from "openai";

export async function POST({ request }) {
  try {
    const { voice, phrase } = await request.json();

    const client = new OpenAI({
      apiKey: import.meta.env.OPENAI_API_KEY,
    });

    const response = await client.audio.speech.create({
      model: "gpt-4o-mini-tts",
      voice,
      input: phrase,
      format: "mp3",
      speed: 1,
    });

    const audio = Buffer.from(await response.arrayBuffer());

    return new Response(audio, {
      headers: {
        "Content-Type": "audio/mpeg"
      }
    });

  } catch (error) {
    console.error(error);
    return new Response("Error previewing voice", { status: 500 });
  }
}
