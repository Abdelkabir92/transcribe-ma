import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CnPX_WE5.mjs';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Register = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "lang": "ar", "dir": "rtl" }, { "default": async ($$result2) => renderTemplate` <meta charset="UTF-8"> ${maybeRenderHead()}<div class="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md"> <h2 class="text-xl font-bold mb-4">إنشاء حساب جديد</h2> <form id="registerForm" class="space-y-4"> <input type="text" name="name" placeholder="الاسم الكامل" required class="w-full border p-2 rounded"> <input type="email" name="email" placeholder="البريد الإلكتروني" required class="w-full border p-2 rounded"> <input type="password" name="password" placeholder="كلمة السر" required class="w-full border p-2 rounded"> <button type="submit" class="px-4 py-2 bg-purple-600 text-white rounded w-full">
إنشاء الحساب
</button> </form> <p class="mt-4 text-center">
عندك حساب؟ <a href="/login" class="text-purple-600">تسجيل الدخول</a> </p> </div> ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/register.astro?astro&type=script&index=0&lang.ts")} ` })} `;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/register.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Register,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
