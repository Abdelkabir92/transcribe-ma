// src/pages/api/meeting-process.ts
import type { APIRoute } from "astro";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { transcript } = await request.json();

    if (!transcript || transcript.length < 5) {
      return new Response(
        JSON.stringify({ error: "لا يوجد نص كافٍ للتحليل." }),
        { status: 400 }
      );
    }

    const prompt = `
حلّل النص التالي:
- ملخص سريع
- ملخص تفصيلي
- أهم النقاط
- المهام (Action items)
- الكلمات المفتاحية
- الأسئلة المهمة
- تقسيم المتحدثين + Timeline (سمي كل واحد: المتحدث 1، المتحدث 2...)

النص:
${transcript}
    `;

    const res = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });

    const output = res.choices[0].message.content;

    // نفترض أنه يرجع JSON بصيغة صحيحة
    const data = JSON.parse(output);

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (err) {
    console.error("meeting-process error:", err);
    return new Response(JSON.stringify({ error: "خطأ أثناء تحليل الجلسة." }), {
      status: 500
    });
  }
};
