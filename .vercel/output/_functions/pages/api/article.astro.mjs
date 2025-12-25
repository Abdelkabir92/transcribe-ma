import 'openai';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  console.log("🔑 Exists:", !!process.env.OPENAI_API_KEY);
  return new Response("Missing API Key", { status: 500 });
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
