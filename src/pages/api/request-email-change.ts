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

async function saveTokens(tokens: any) {
  await fs.writeFile(TOKENS_FILE, JSON.stringify(tokens, null, 2), "utf-8");
}

async function loadTokens() {
  try {
    const raw = await fs.readFile(TOKENS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return { passwordResets: [], emailChanges: [] };
  }
}

// نفس الطريقة اللي كتستعملها دابا فـ middleware ديالك، هنا غادي ندير نسخة مبسطة
function parseCookies(header: string | null) {
  const list: Record<string, string> = {};
  if (!header) return list;
  header.split(";").forEach((cookie) => {
    const parts = cookie.split("=");
    const name = parts.shift()?.trim();
    if (!name) return;
    list[name] = decodeURIComponent(parts.join("="));
  });
  return list;
}

export const POST: APIRoute = async ({ request }) => {
  const form = await request.formData();
  const newEmail = String(form.get("newEmail") || "").toLowerCase().trim();

  if (!newEmail) {
    return new Response("Missing email", { status: 400 });
  }

  const cookies = parseCookies(request.headers.get("cookie"));
  const token = cookies["user_token"];

  if (!token) {
    return new Response("Not logged in", { status: 401 });
  }

  const users = await loadUsers();
  const user = users.find((u: any) => String(u.id) === String(token));

  if (!user) {
    return new Response("User not found", { status: 401 });
  }

  const tokens = await loadTokens();

  // مسح أي توكنات قديمة لهذا اليوزر
  tokens.emailChanges = tokens.emailChanges.filter(
    (t: any) => t.userId !== user.id
  );

  const emailToken = crypto.randomBytes(32).toString("hex");
  const expiresAt = new Date(Date.now() + 1000 * 60 * 30).toISOString(); // 30 دقيقة

  tokens.emailChanges.push({
    token: emailToken,
    userId: user.id,
    newEmail,
    expiresAt,
  });

  await saveTokens(tokens);

  const siteUrl =
    (import.meta.env.PUBLIC_SITE_URL as string) || "http://localhost:4321";

  const verifyLink = `${siteUrl}/verify-email-change?token=${emailToken}`;

  await resend.emails.send({
    from:
      (import.meta.env.EMAIL_FROM as string) ||
      "Transcribe <no-reply@transcribe.ma>",
    to: newEmail,
    subject: "تأكيد تغيير الإيميل - Transcribe",
    html: `
      <p>السلام عليكم 👋</p>
      <p>بغيت تبدّل الإيميل ديال حسابك في <strong>Transcribe</strong> لهذا الإيميل: <strong>${newEmail}</strong>.</p>
      <p>باش نأكدوا التغيير، ضغط على الزر التالي:</p>
      <p><a href="${verifyLink}" style="background:#6d28d9;color:#fff;padding:10px 18px;border-radius:8px;text-decoration:none;">تأكيد الإيميل الجديد</a></p>
      <p>الرابط صالح لمدة <strong>30 دقيقة</strong>.</p>
      <p>إذا ما كنتش أنت اللي دار هاد العملية، تجاهل الرسالة.</p>
    `,
  });

  return new Response(
    `
    <html dir="rtl" lang="ar">
      <body style="font-family: system-ui; text-align:center; padding-top:40px;">
        <h2>✅ تم إرسال رابط التأكيد للإيميل الجديد.</h2>
        <p>تفقد البريد الوارد في ${newEmail}</p>
        <a href="/dashboard" style="display:inline-block;margin-top:20px;color:#6d28d9;">الرجوع للوحة التحكم</a>
      </body>
    </html>
  `,
    { headers: { "Content-Type": "text/html; charset=utf-8" } }
  );
};
