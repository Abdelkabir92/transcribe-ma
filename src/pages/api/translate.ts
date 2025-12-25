import type { APIRoute } from "astro";
import OpenAI from "openai";

export const POST: APIRoute = async ({ request }) => {
  try {
    const { text, lang } = await request.json();

    const client = new OpenAI({
      apiKey: import.meta.env.OPENAI_API_KEY,
    });

    const result = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: `Translate the text to ${lang}` },
        { role: "user", content: text }
      ]
    });

    const translation = result.choices[0].message.content;

    return new Response(JSON.stringify({ translation }), {
      status: 200,
    });

  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Translation error" }), {
      status: 500,
    });
  }
};
