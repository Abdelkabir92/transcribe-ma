import { Resend } from 'resend';

export const prerender = false;

export async function POST({ request }) {
  try {
    const { to, subject, html } = await request.json();

    const resend = new Resend(import.meta.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: import.meta.env.EMAIL_FROM,
      to,
      subject,
      html,
    });

    return new Response(JSON.stringify({ ok: true, result }), { status: 200 });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response(JSON.stringify({ ok: false, error }), { status: 500 });
  }
}
