import OpenAI from 'openai';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const { text, lang } = await request.json();
    const client = new OpenAI({
      apiKey: undefined                              
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
      status: 200
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Translation error" }), {
      status: 500
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
