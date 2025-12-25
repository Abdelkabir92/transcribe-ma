import type { APIRoute } from "astro";
import OpenAI from "openai";
import fs from "fs";
import path from "path";
import { randomUUID } from "crypto";

export const POST: APIRoute = async ({ request }) => {
  try {
    // ✅ قراءة ENV بالطريقة الصحيحة في Astro
    const OPENAI_API_KEY = import.meta.env.OPENAI_API_KEY;

    if (!OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
        { status: 401 }
      );
    }

    const form = await request.formData();
    const file = form.get("file") as File | null;

    if (!file) {
      return new Response(
        JSON.stringify({ error: "No file uploaded" }),
        { status: 400 }
      );
    }

    // 📂 حفظ الملف مؤقتاً
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const tmpDir = path.join(process.cwd(), "tmp");
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

    const filePath = path.join(tmpDir, `${randomUUID()}-${file.name}`);
    fs.writeFileSync(filePath, buffer);

    // 🤖 OpenAI
    const openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });

    // ✅ Whisper (الصحيح)
    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream(filePath),
      model: "whisper-1",
      response_format: "verbose_json", // ✔ مدعوم هنا
    });

    // 🧹 حذف الملف
    fs.unlinkSync(filePath);

    return new Response(
      JSON.stringify({
        text: transcription.text,
        segments: transcription.segments || [],
      }),
      { status: 200 }
    );
  } catch (err: any) {
    console.error("TRANSCRIBE ERROR:", err);

    return new Response(
      JSON.stringify({
        error: err?.message || "Internal server error",
      }),
      { status: 500 }
    );
  }
};
