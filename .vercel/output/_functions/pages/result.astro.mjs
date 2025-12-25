import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Result = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u0627\u0644\u0646\u062A\u064A\u062C\u0629 \u0627\u0644\u0646\u0647\u0627\u0626\u064A\u0629 \u0644\u0644\u0646\u0635" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="min-h-screen bg-gray-50 flex items-center justify-center p-6"> <div class="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8"> <h1 class="text-center text-2xl font-bold text-gray-900 mb-6">
النتيجة النهائية للنص المستخرج
</h1> <!-- النص --> <div id="resultBox" class="bg-gray-100 p-5 rounded-xl leading-8 text-gray-800 whitespace-pre-wrap text-lg mb-8">
جاري تحميل النص...
</div> <!-- ✅ ADSENSE (أفضل مكان) --> <div class="my-8 text-center"> <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-XXXXXXXXXXXX" data-ad-slot="1234567890" data-ad-format="auto" data-full-width-responsive="true"></ins> ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/result.astro?astro&type=script&index=0&lang.ts")} </div> <!-- الأزرار --> <div class="mt-8 flex gap-4 flex-wrap justify-center"> <button id="copyBtn" class="px-6 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-700 transition">
نسخ النص
</button> <button id="txtBtn" class="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
تحميل TXT
</button> <button id="pdfBtn" class="px-6 py-3 bg-gray-200 rounded-xl hover:bg-gray-300 transition">
تحميل PDF
</button> <button id="translateBtn" class="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
ترجمة النص
</button> </div> <!-- Popup اختيار اللغة --> <div id="langPopup" class="hidden fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center"> <div class="bg-white p-6 rounded-2xl shadow-xl w-72"> <h2 class="text-xl font-bold text-gray-800 mb-4 text-center">
اختر اللغة
</h2> <select id="langSelect" class="w-full p-2 border rounded-lg mb-4"> <option value="ar">العربية</option> <option value="en">الإنجليزية</option> <option value="fr">الفرنسية</option> <option value="es">الإسبانية</option> <option value="de">الألمانية</option> <option value="it">الإيطالية</option> <option value="ru">الروسية</option> <option value="tr">التركية</option> <option value="zh">الصينية</option> </select> <button id="sendTranslate" class="w-full bg-blue-600 text-white p-2 rounded-lg">
ترجمة
</button> </div> </div> <!-- رجوع --> <div class="mt-10 text-center"> <a href="/transcribe" class="text-purple-600 font-semibold underline">
⟵ الرجوع لصفحة التحويل
</a> </div> <!-- ملاحظة قانونية (تحميك مع AdSense) --> <p class="mt-8 text-sm text-gray-500 text-center">
ملاحظة: النص الناتج يتم إنشاؤه آلياً وقد يحتوي على أخطاء،
      يُنصح بمراجعته قبل الاستعمال.
</p> </div> </section> ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/result.astro?astro&type=script&index=1&lang.ts")} ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/result.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/result.astro";
const $$url = "/result";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Result,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
