import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0645\u0646 \u0646\u062D\u0646 | Transcribe" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12 leading-relaxed text-gray-800"> <h1 class="text-3xl font-bold mb-6">من نحن</h1> <p class="mb-4">
Transcribe هي منصة رقمية تعتمد على تقنيات الذكاء الاصطناعي
    لتقديم خدمات تحويل الصوت والفيديو إلى نص مكتوب،
    إضافة إلى أدوات ذكية لمعالجة المحتوى النصي.
</p> <p class="mb-4">
هدفنا هو مساعدة الطلبة، الصحفيين، صناع المحتوى،
    وأصحاب الأعمال على توفير الوقت والجهد
    عبر أدوات سهلة الاستعمال وفعالة.
</p> <p class="mb-4">
نركز في Transcribe على البساطة، الجودة، وحماية خصوصية المستخدم،
    دون الحاجة إلى إنشاء حساب أو مشاركة معلومات شخصية.
</p> <p>
نعمل باستمرار على تحسين خدماتنا وتطويرها
    لتلبية احتياجات المستخدمين بأفضل شكل ممكن.
</p> </section> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/about.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
