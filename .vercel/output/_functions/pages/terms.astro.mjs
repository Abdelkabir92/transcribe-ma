import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Terms = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0634\u0631\u0648\u0637 \u0627\u0644\u0627\u0633\u062A\u062E\u062F\u0627\u0645 | Transcribe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12 leading-relaxed text-gray-800"> <h1 class="text-3xl font-bold mb-6">شروط الاستخدام</h1> <p class="mb-4">
باستخدامك لمنصة Transcribe،
    فإنك توافق على الالتزام بشروط الاستخدام التالية.
</p> <ul class="list-disc pr-6 space-y-3 mb-4"> <li>عدم استخدام الموقع لأغراض غير قانونية أو مخالفة للأنظمة.</li> <li>عدم رفع محتوى ينتهك حقوق الملكية الفكرية للغير.</li> <li>الخدمات المقدمة هي خدمات آلية وقد لا تكون دقيقة بنسبة 100%.</li> <li>المستخدم مسؤول عن مراجعة المحتوى قبل استعماله.</li> </ul> <p>
تحتفظ منصة Transcribe بحق تعديل شروط الاستخدام
    في أي وقت دون إشعار مسبق.
</p> </section> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/terms.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/terms.astro";
const $$url = "/terms";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Terms,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
