import { Resend } from 'resend';
import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const resend = new Resend(undefined                              );
const USERS_FILE = path.join(process.cwd(), "src", "data", "users.json");
const TOKENS_FILE = path.join(process.cwd(), "src", "data", "tokens.json");
async function loadUsers() {
  const raw = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(raw);
}
async function loadTokens() {
  try {
    const raw = await fs.readFile(TOKENS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { passwordResets: [], emailChanges: [] };
  }
}
async function saveTokens(tokens) {
  await fs.writeFile(TOKENS_FILE, JSON.stringify(tokens, null, 2), "utf-8");
}
const POST = async ({ request }) => {
  const form = await request.formData();
  const email = String(form.get("email") || "").toLowerCase().trim();
  let user;
  try {
    const users = await loadUsers();
    user = users.find((u) => u.email.toLowerCase() === email);
  } catch (e) {
    console.error("LOAD USERS ERROR", e);
  }
  if (user) {
    const tokens = await loadTokens();
    tokens.passwordResets = tokens.passwordResets.filter(
      (t) => t.email !== email
    );
    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 1e3 * 60 * 30).toISOString();
    tokens.passwordResets.push({ token, email, expiresAt });
    await saveTokens(tokens);
    const siteUrl = "http://localhost:4321";
    const resetLink = `${siteUrl}/reset-password?token=${token}`;
    try {
      await resend.emails.send({
        from: undefined                           || "Transcribe <no-reply@transcribe.ma>",
        to: email,
        subject: "إعادة تعيين كلمة المرور - Transcribe",
        html: `
          <p>السلام عليكم 👋</p>
          <p>توصلنا بطلب لإعادة تعيين كلمة المرور ديال حسابك في <strong>Transcribe</strong>.</p>
          <p>إلى كنت أنت هو صاحب الطلب، ضغط على الزر التالي:</p>
          <p><a href="${resetLink}" style="background:#6d28d9;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;">إعادة تعيين كلمة المرور</a></p>
          <p>الرابط صالح لمدة <strong>30 دقيقة</strong>.</p>
          <p>إلى ما كنتش أنت، يمكن تتجاهل هاد الرسالة.</p>
        `
      });
    } catch (e) {
      console.error("RESEND ERROR", e);
    }
  }
  return new Response(
    `
    <html dir="rtl" lang="ar">
      <body style="font-family: system-ui; text-align:center; padding-top:40px;">
        <h2>✅ إذا كان الإيميل مسجّل، راه رسلنا رابط إعادة التعيين.</h2>
        <p>تفقد البريد الوارد (Inbox) و الـ Spam.</p>
        <a href="/login" style="display:inline-block;margin-top:20px;color:#6d28d9;">الرجوع لتسجيل الدخول</a>
      </body>
    </html>
  `,
    {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    }
  );
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
