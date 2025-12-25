import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
async function POST({ request }) {
  try {
    const { to, subject, html } = await request.json();
    const resend = new Resend(undefined                              );
    const result = await resend.emails.send({
      from: undefined                          ,
      to,
      subject,
      html
    });
    return new Response(JSON.stringify({ ok: true, result }), { status: 200 });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response(JSON.stringify({ ok: false, error }), { status: 500 });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
