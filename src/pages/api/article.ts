import OpenAI from "openai";

export async function POST({ request }) {
  console.log("🔑 Exists:", !!process.env.OPENAI_API_KEY);

  const apiKey = import.meta.env.OPENAI_API_KEY;
  if (!apiKey) return new Response("Missing API Key", { status: 500 });

  const client = new OpenAI({ apiKey });

  try {
    const { topic } = await request.json();

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "أنت كاتب مقالات محترف بالعربية." },
        { role: "user", content: `أنشئ مقالا مفصلا حول: ${topic}` }
      ],
    });

    return new Response(
      JSON.stringify({ article: completion.choices[0].message.content }),
      { status: 200 }
    );

  } catch (err) {
    return new Response("Error", { status: 500 });
  }
}
