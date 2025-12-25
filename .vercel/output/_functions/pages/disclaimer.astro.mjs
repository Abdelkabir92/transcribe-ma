import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Disclaimer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u062E\u0644\u0627\u0621 \u0627\u0644\u0645\u0633\u0624\u0648\u0644\u064A\u0629 | Transcribe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12 text-gray-800"> <h1 class="text-3xl font-bold mb-6">إخلاء المسؤولية</h1> <p class="mb-4">
المعلومات والنصوص التي يتم إنشاؤها
    عبر موقع Transcribe هي نتائج آلية
    وقد تحتوي على أخطاء.
</p> <p>
نحن غير مسؤولين عن أي استخدام غير صحيح
    للمحتوى الناتج عن الخدمة.
</p> </section> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/disclaimer.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/disclaimer.astro";
const $$url = "/disclaimer";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Disclaimer,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
