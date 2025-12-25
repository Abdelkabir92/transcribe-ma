// src/pages/api/meeting-chat.ts
import type { APIRoute } from "astro";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { transcript, summary, question } = await request.json();

    const prompt = `
السياق:
هذا اجتماع تم تحويله إلى نص.

النص الأصلي:
${transcript}

الملخص:
${JSON.stringify(summary, null, 2)}

السؤال المطلوب:
${question}

أعطني جواباً واضحاً مبني على سياق الاجتماع فقط.
    `;

    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "أنت مساعد خبير في تحليل الاجتماعات." },
        { role: "user", content: prompt }
      ]
    });

    return new Response(
      JSON.stringify({ answer: res.choices[0].message.content }),
      { status: 200 }
    );
  } catch (err) {
    console.error("meeting-chat error:", err);
    return new Response(JSON.stringify({ error: "Chat AI error" }), {
      status: 500
    });
  }
};
