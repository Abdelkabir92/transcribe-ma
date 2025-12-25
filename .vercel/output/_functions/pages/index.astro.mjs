import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Transcribe.ma \u2013 \u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0635\u0648\u062A \u0648\u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0625\u0644\u0649 \u0646\u0635 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="bg-white py-24"> <div class="max-w-4xl mx-auto text-center px-4"> <h1 class="text-4xl font-bold text-gray-900 mb-6 leading-tight">
تحويل الصوت والفيديو إلى نص<br> <span class="text-purple-600">بسهولة وبدقة عالية</span> </h1> <p class="text-lg text-gray-600 leading-relaxed">
Transcribe.ma منصة تعتمد على الذكاء الاصطناعي لتحويل ملفات الصوت والفيديو
      إلى نص مكتوب، مع أدوات إضافية لمعالجة النصوص مثل التلخيص
      وتحويل النص إلى صوت، بدون تعقيد.
</p> </div> </section>  <section class="py-20 bg-gray-50"> <div class="max-w-6xl mx-auto px-4"> <h2 class="text-2xl font-bold text-center text-gray-900 mb-12">
خدمات Transcribe.ma
</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> <!-- تحويل الصوت إلى نص --> <a href="/transcribe" class="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition border"> <h3 class="text-xl font-bold text-gray-900 mb-2">
🎧 تحويل الصوت والفيديو إلى نص
</h3> <p class="text-gray-600 text-sm leading-relaxed">
قم برفع ملف صوتي أو فيديو (MP3، WAV، MP4…) وسيتم
          استخراج النص تلقائياً بدقة عالية.
</p> </a> <!-- تلخيص النص --> <a href="/summarize" class="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition border"> <h3 class="text-xl font-bold text-gray-900 mb-2">
📝 تلخيص النصوص
</h3> <p class="text-gray-600 text-sm leading-relaxed">
أداة تساعدك على تلخيص المقالات والنصوص الطويلة
          بطريقة واضحة ومركزة.
</p> </a> <!-- إنشاء مقال --> <a href="/article" class="bg-white shadow-sm rounded-xl p-6 hover:shadow-lg transition border"> <h3 class="text-xl font-bold text-gray-900 mb-2">
✍️ إنشاء المقالات
</h3> <p class="text-gray-600 text-sm leading-relaxed">
أنشئ مقالات منظمة انطلاقاً من فكرة أو عنوان،
          مناسبة للمحتوى التعليمي أو المهني.
</p> </a> </div> </div> </section>  <section class="py-20 bg-white"> <div class="max-w-4xl mx-auto px-4 space-y-8 text-gray-700 leading-relaxed"> <h2 class="text-2xl font-bold text-gray-900">
لماذا Transcribe.ma؟
</h2> <p>
تم تطوير Transcribe.ma لتسهيل التعامل مع الملفات الصوتية
      والفيديوهات، خصوصاً للطلبة، الصحفيين، صناع المحتوى،
      وأصحاب المشاريع الذين يحتاجون إلى نصوص دقيقة
      بدون إضاعة الوقت.
</p> <p>
تعتمد المنصة على تقنيات حديثة في معالجة الصوت
      والنصوص، مع احترام خصوصية المستخدمين،
      حيث لا يتم تخزين الملفات بعد معالجتها.
</p> </div> </section>  <section class="py-10 bg-gray-50"> <div class="max-w-4xl mx-auto px-4 text-sm text-gray-500 leading-relaxed"> <p>
ملاحظة: النتائج التي يتم إنشاؤها عبر Transcribe.ma
      تعتمد على أنظمة آلية وقد تحتوي على أخطاء.
      يُنصح دائماً بمراجعة النص قبل استعماله
      في أغراض رسمية أو مهنية.
</p> </div> </section>  <footer class="text-center py-8 text-gray-500 text-sm border-t">
© 2025 Transcribe.ma — جميع الحقوق محفوظة
</footer> ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/index.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
