import fs from 'fs/promises';
import path from 'path';
import crypto from 'crypto';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const USERS_FILE = path.join(process.cwd(), "src", "data", "users.json");
const TOKENS_FILE = path.join(process.cwd(), "src", "data", "tokens.json");
async function loadUsers() {
  const raw = await fs.readFile(USERS_FILE, "utf-8");
  return JSON.parse(raw);
}
async function saveUsers(users) {
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), "utf-8");
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
function hashPassword(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}
const POST = async ({ request }) => {
  const form = await request.formData();
  const token = String(form.get("token") || "");
  const password = String(form.get("password") || "");
  const confirm = String(form.get("confirm") || "");
  if (!token || !password || password !== confirm) {
    return new Response(
      `<h2>خطأ في البيانات 😕</h2><a href="/forgot-password">إعادة المحاولة</a>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
  const tokens = await loadTokens();
  const record = tokens.passwordResets.find((t) => t.token === token);
  if (!record) {
    return new Response(
      `<h2>الرابط غير صالح أو استُعمل من قبل.</h2>`,
      { headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
  const isExpired = new Date(record.expiresAt).getTime() < Date.now();
  if (isExpired) {
    return new Response(`<h2>انتهت مدة صلاحية الرابط.</h2>`, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
  const users = await loadUsers();
  const user = users.find(
    (u) => u.email.toLowerCase() === record.email.toLowerCase()
  );
  if (!user) {
    return new Response(`<h2>الحساب غير موجود.</h2>`, {
      headers: { "Content-Type": "text/html; charset=utf-8" }
    });
  }
  user.password = hashPassword(password);
  await saveUsers(users);
  tokens.passwordResets = tokens.passwordResets.filter(
    (t) => t.token !== token
  );
  await saveTokens(tokens);
  return new Response(
    `
    <html dir="rtl" lang="ar">
      <body style="font-family: system-ui; text-align:center; padding-top:40px;">
        <h2>✅ تم تغيير كلمة المرور بنجاح.</h2>
        <a href="/login" style="display:inline-block;margin-top:20px;color:#6d28d9;">الذهاب لتسجيل الدخول</a>
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
