import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$PrivacyPolicy = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0633\u064A\u0627\u0633\u0629 \u0627\u0644\u062E\u0635\u0648\u0635\u064A\u0629 | Transcribe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12 leading-relaxed text-gray-800"> <h1 class="text-3xl font-bold mb-6">سياسة الخصوصية</h1> <p class="mb-4">
تحترم منصة Transcribe خصوصية زوارها،
    وتلتزم بحماية أي معلومات يتم التعامل معها أثناء استخدام الموقع.
</p> <p class="mb-4">
لا نقوم بتخزين الملفات الصوتية أو النصوص
    بعد الانتهاء من معالجتها،
    ويتم حذفها تلقائياً لأسباب أمنية.
</p> <p class="mb-4">
لا نطلب من المستخدمين إنشاء حساب
    أو إدخال معلومات شخصية لاستخدام الخدمات المتوفرة.
</p> <p class="mb-4">
قد يستخدم الموقع خدمات خارجية مثل Google AdSense،
    والتي قد تعتمد على ملفات تعريف الارتباط (Cookies)
    لعرض إعلانات ملائمة للمستخدم.
</p> <p>
باستخدامك لموقع Transcribe،
    فإنك توافق على سياسة الخصوصية هذه.
</p> </section> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/privacy-policy.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/privacy-policy.astro";
const $$url = "/privacy-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$PrivacyPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
