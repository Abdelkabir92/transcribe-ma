import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u062A\u0635\u0644 \u0628\u0646\u0627 | Transcribe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12 leading-relaxed text-gray-800"> <h1 class="text-3xl font-bold mb-6">اتصل بنا</h1> <p class="mb-4">
إذا كانت لديك أي استفسارات، اقتراحات،
    أو واجهت مشكلة أثناء استخدام الموقع،
    لا تتردد في التواصل معنا.
</p> <p class="mb-2 font-semibold">
📧 البريد الإلكتروني:
</p> <p class="text-purple-600 font-semibold">
support@transcribe.ma
</p> </section> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/contact.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
