import type { APIRoute } from "astro";
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import OpenAI from "openai";

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const file = form.get("audio") as File;

  if (!file) {
    return new Response(JSON.stringify({ error: "No audio" }), { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const tmp = path.join(process.cwd(), "tmp");
  if (!fs.existsSync(tmp)) fs.mkdirSync(tmp);

  const webm = path.join(tmp, `audio_${Date.now()}.webm`);
  const wav = webm.replace(".webm", ".wav");

  fs.writeFileSync(webm, buffer);

  // 🔥 تحويل صحيح
  execSync(`ffmpeg -y -i "${webm}" -ar 16000 -ac 1 "${wav}"`);

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });

  const result = await openai.audio.transcriptions.create({
    file: fs.createReadStream(wav),
    model: "gpt-4o-transcribe",
    language: "ar" // ❌ ماشي auto
  });

  fs.unlinkSync(webm);
  fs.unlinkSync(wav);

  return new Response(JSON.stringify({ text: result.text }));
};
