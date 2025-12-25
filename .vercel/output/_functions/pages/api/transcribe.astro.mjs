import OpenAI from 'openai';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  try {
    const apiKey = undefined                              ;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "Missing API key" }), { status: 500 });
    }
    const form = await request.formData();
    const file = form.get("file");
    if (!file) {
      return new Response(JSON.stringify({ error: "No file provided" }), { status: 400 });
    }
    const openai = new OpenAI({ apiKey });
    const transcription = await openai.audio.transcriptions.create({
      file,
      model: "gpt-4o-transcribe"
    });
    return new Response(JSON.stringify({
      text: transcription.text
    }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Transcription failed" }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
