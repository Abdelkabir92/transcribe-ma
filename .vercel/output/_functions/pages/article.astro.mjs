import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Article = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0625\u0646\u0634\u0627\u0621 \u0645\u0642\u0627\u0644 \u0628\u0627\u0644\u0630\u0643\u0627\u0621 \u0627\u0644\u0627\u0635\u0637\u0646\u0627\u0639\u064A" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12"> <!-- BACK --> <a href="/" class="inline-block mb-6 text-purple-600 hover:text-purple-800 font-semibold">
← الرجوع للصفحة الرئيسية
</a> <!-- TITLE --> <header class="text-center mb-8"> <h1 class="text-3xl font-extrabold mb-3">
✨ إنشاء مقال احترافي بالذكاء الاصطناعي
</h1> <p class="text-gray-600 text-lg">
أدخل موضوع المقال وسنقوم بإنشاء مقال متكامل بصياغة احترافية.
</p> </header> <!-- ✅ ADSENSE (TOP – SAFE) --> <div class="mb-10 border rounded-lg py-4 text-center text-gray-400 text-sm">
🔔 إعلان (Google AdSense)
</div> <!-- INPUT --> <textarea id="topicInput" class="w-full border rounded-xl p-4 text-lg
           focus:outline-none focus:ring-2 focus:ring-purple-500" rows="4" placeholder="اكتب موضوع المقال الذي تريد إنشاءه..."></textarea> <!-- GENERATE --> <button id="generateBtn" class="w-full bg-purple-600 text-white py-3 rounded-xl mt-4
           font-semibold hover:bg-purple-700 transition">
إنشاء المقال الآن
</button> <!-- LOADING --> <p id="loading" class="hidden mt-4 text-center text-lg">
⏳ جارٍ إنشاء المقال...
</p> <!-- RESULT --> <div id="resultBox" class="hidden mt-8 bg-gray-100 p-6 rounded-xl"> <h2 class="font-bold text-xl mb-4">📄 المقال الناتج</h2> <div id="articleResult" class="text-gray-800 leading-8 whitespace-pre-wrap"></div> <button id="copyArticleBtn" class="mt-6 w-full bg-gray-900 text-white py-3 rounded-xl text-lg">
📄 نسخ المقال
</button> <p id="copyMsg" class="hidden text-green-600 font-semibold mt-2 text-center">
✔ تم نسخ المقال بنجاح
</p> <!-- ✅ ADSENSE (BOTTOM – OPTIONAL) --> <div class="mt-10 border rounded-lg py-4 text-center text-gray-400 text-sm">
🔔 إعلان (Google AdSense)
</div> </div> </section> ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/article.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/article.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/article.astro";
const $$url = "/article";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Article,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
