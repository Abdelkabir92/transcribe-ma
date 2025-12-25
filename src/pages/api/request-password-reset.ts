import type { APIRoute } from "astro";
import { Resend } from "resend";
import fs from "fs/promises";
import path from "path";
import crypto from "crypto";

export const prerender = false;

const resend = new Resend(import.meta.env.RESEND_API_KEY as string);

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

async function saveTokens(tokens: any) {
  await fs.writeFile(TOKENS_FILE, JSON.stringify(tokens, null, 2), "utf-8");
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const email = String(form.get("email") || "").toLowerCase().trim();

  // ما نرجعوش error حتى إلا ماكانش الإيميل باش ما نفضحوش واش مسجّل ولا لا
  let user;
  try {
    const users = await loadUsers();
    user = users.find((u: any) => u.email.toLowerCase() === email);
  } catch (e) {
    console.error("LOAD USERS ERROR", e);
  }

  if (user) {
    const tokens = await loadTokens();

    // نمسحو أي توكنات قديمة لهذا الإيميل
    tokens.passwordResets = tokens.passwordResets.filter(
      (t: any) => t.email !== email
    );

    const token = crypto.randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 1000 * 60 * 30).toISOString(); // 30 دقيقة

    tokens.passwordResets.push({ token, email, expiresAt });
    await saveTokens(tokens);

    const siteUrl =
      (import.meta.env.PUBLIC_SITE_URL as string) || "http://localhost:4321";

    const resetLink = `${siteUrl}/reset-password?token=${token}`;

    try {
      await resend.emails.send({
        from:
          (import.meta.env.EMAIL_FROM as string) ||
          "Transcribe <no-reply@transcribe.ma>",
        to: email,
        subject: "إعادة تعيين كلمة المرور - Transcribe",
        html: `
          <p>السلام عليكم 👋</p>
          <p>توصلنا بطلب لإعادة تعيين كلمة المرور ديال حسابك في <strong>Transcribe</strong>.</p>
          <p>إلى كنت أنت هو صاحب الطلب، ضغط على الزر التالي:</p>
          <p><a href="${resetLink}" style="background:#6d28d9;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;">إعادة تعيين كلمة المرور</a></p>
          <p>الرابط صالح لمدة <strong>30 دقيقة</strong>.</p>
          <p>إلى ما كنتش أنت، يمكن تتجاهل هاد الرسالة.</p>
        `,
      });
    } catch (e) {
      console.error("RESEND ERROR", e);
      // ما نرجعوش error للمستخدم، غير نطبع فاللوغ
    }
  }

  // فالحالتين نرجع نفس الرسالة
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
      headers: { "Content-Type": "text/html; charset=utf-8" },
    }
  );
};
