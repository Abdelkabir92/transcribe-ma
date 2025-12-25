import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const prerender = false;

export async function GET() {
  try {
    const result = await resend.emails.send({
      from: "support@transcribe.ma",
      to: "email_dyalek@gmail.com",
      subject: "Test Email from Transcribe.ma",
      html: "<p>تمت التجربة بنجاح 🚀</p>",
    });

    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify(err), { status: 500 });
  }
}
