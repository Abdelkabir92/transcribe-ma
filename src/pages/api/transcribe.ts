import type { APIRoute } from "astro";
import OpenAI from "openai";

export const POST: APIRoute = async ({ request }) => {
  try {
    const apiKey = import.meta.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });
    }

    const form = await request.formData();
    const file = form.get("file") as File;

    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
    }

    const openai = new OpenAI({ apiKey });

    const transcription = await openai.audio.transcriptions.create({
      file,
      model: "gpt-4o-transcribe",
    });

    return new Response(JSON.stringify({
      text: transcription.text,
    }), { status: 200 });

  } catch (err: any) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Transcription failed" }), { status: 500 });
  }
};
