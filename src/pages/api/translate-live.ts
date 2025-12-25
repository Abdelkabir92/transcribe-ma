// src/pages/api/translate-live.ts
import type { APIRoute } from "astro";
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: import.meta.env.OPENAI_API_KEY
});

export const POST: APIRoute = async ({ request }) => {
  try {
    const { text, target } = await request.json();

    if (!text) {
      return new Response(JSON.stringify({ translated: "" }), {
        status: 200
      });
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `ترجم النص التالي إلى "${target}".`
        },
        {
          role: "user",
          content: text
        }
      ]
    });

    return new Response(
      JSON.stringify({
        translated: response.choices[0].message.content
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Translate-live error:", err);
    return new Response(JSON.stringify({ translated: "" }), { status: 200 });
  }
};
