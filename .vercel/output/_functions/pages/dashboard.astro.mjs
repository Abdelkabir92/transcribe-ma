import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
import fs from 'fs';
import path from 'path';
import { parse } from 'cookie';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Dashboard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const cookies = parse(Astro2.request.headers.get("cookie") || "");
  const token = cookies["user_token"];
  if (!token) {
    return Astro2.redirect("/login");
  }
  const usersPath = path.join(process.cwd(), "src", "data", "users.json");
  const plansPath = path.join(process.cwd(), "src", "data", "plans.json");
  const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
  const plans = JSON.parse(fs.readFileSync(plansPath, "utf8"));
  const user = users.find((u) => u.id == token);
  if (!user) return Astro2.redirect("/login");
  const plan = plans.find((p) => p.id == user.planId) || {
    name: "Free"};
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0644\u0648\u062D\u0629 \u0627\u0644\u062A\u062D\u0643\u0645" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="bg-gray-100 min-h-screen px-6 py-10 font-[Cairo]"> <div class="max-w-4xl mx-auto"> <h1 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
🎛️ لوحة التحكم
</h1> <!-- بطاقة معلومات الحساب --> <div class="bg-white rounded-3xl shadow-lg p-6 mb-8 border border-gray-200"> <h2 class="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
👤 معلومات الحساب
</h2> <div class="space-y-2 text-gray-700"> <p><strong>الاسم:</strong> ${user.name}</p> <p><strong>الإيميل:</strong> ${user.email}</p> <p><strong>الخطة الحالية:</strong> ${plan.name}</p> <p>رصيدي المتبقي: ${user.credits} Credit</p> <p><strong>الملخصات المتبقية:</strong> ${user.summaries}</p> </div> <div class="mt-6 flex gap-4 flex-wrap"> <a href="/pricing" class="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-xl shadow">
تغيير الخطة
</a> <a href="/change-password" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl shadow">
تغيير كلمة المرور
</a> <a href="/update-user" class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-xl shadow">
تغيير الإيميل
</a> <a href="/api/logout" class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl shadow">
تسجيل الخروج
</a> </div> </div> <!-- الخدمات --> <div class="bg-white rounded-3xl shadow-lg p-6 border border-gray-200"> <h2 class="text-xl font-bold text-gray-700 mb-4 flex items-center gap-2">
🧰 الخدمات المتاحة لك
</h2> <ul class="text-gray-700 space-y-2"> <li>🎙️ تحويل الصوت إلى نص</li> <li>🎞️ تلخيص الفيديو</li> <li>📝 تلخيص النصوص</li> <li>✍️ إنشاء المقالات</li> </ul> </div> </div> </div> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/dashboard.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/dashboard.astro";
const $$url = "/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
