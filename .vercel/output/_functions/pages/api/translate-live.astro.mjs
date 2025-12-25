import OpenAI from 'openai';
export { renderers } from '../../renderers.mjs';

const client = new OpenAI({
  apiKey: undefined                              
});
const POST = async ({ request }) => {
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

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
