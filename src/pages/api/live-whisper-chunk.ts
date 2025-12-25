// src/pages/api/live-whisper-chunk.ts
import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {
    const formData = await request.formData();
    const file = formData.get("audio") as File | null;

    if (!file) {
      return new Response(
        JSON.stringify({ error: "No audio file received" }),
        { status: 400 }
      );
    }

    // نوجدو FormData باش نصيفطوه لـ OpenAI Whisper
    const whisperForm = new FormData();
    whisperForm.append("file", file);
    whisperForm.append("model", "whisper-1"); // موديل Whisper الرسمي
    whisperForm.append("response_format", "json");
    whisperForm.append("language", "ar"); // يقدر يتعرف تلقائياً حتى بلا هادي

    const res = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${import.meta.env.OPENAI_API_KEY}`,
      },
      body: whisperForm,
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Whisper error:", errText);
      return new Response(
        JSON.stringify({ error: "Whisper API error", details: errText }),
        { status: 500 }
      );
    }

    const data = await res.json();

    return new Response(
      JSON.stringify({
        text: data.text || "",
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("live-whisper-chunk error:", err);
    return new Response(
      JSON.stringify({ error: "Server error", details: err.message }),
      { status: 500 }
    );
  }
};
