import { writeFileSync } from "fs";
import { join } from "path";

export async function POST({ request }) {
  try {
    const form = await request.formData();
    const audio = form.get("audio");

    if (!audio || !audio.size) {
      return new Response(JSON.stringify({ error: "Audio file is required" }), {
        status: 400,
      });
    }

    const arrayBuffer = await audio.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // CALL OPENAI - RESPONSES API
    const apiRes = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-audio",
        input: [
          {
            role: "user",
            audio: {
              data: buffer.toString("base64"),
              format: "mp3",
            },
          },
          {
            role: "user",
            content: "Enhance this audio. Remove noise, echo, and improve clarity.",
          },
        ],
        audio_output: [
          {
            format: "wav",
          },
        ],
      }),
    });

    if (!apiRes.ok) {
      const msg = await apiRes.text();
      console.log("OPENAI ERROR:", msg);
      return new Response(JSON.stringify({ error: msg }), { status: 500 });
    }

    const data = await apiRes.json();

    const enhancedBase64 = data.output[0].audio.data;
    const enhancedBuffer = Buffer.from(enhancedBase64, "base64");

    const fileName = `enhanced-${Date.now()}.wav`;
    const filePath = join(process.cwd(), "public", fileName);

    writeFileSync(filePath, enhancedBuffer);

    return new Response(JSON.stringify({ url: "/" + fileName }), {
      status: 200,
    });

  } catch (err) {
    console.log(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
