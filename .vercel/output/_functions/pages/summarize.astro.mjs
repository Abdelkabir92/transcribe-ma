import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Summarize = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u0644\u062E\u064A\u0635 \u0627\u0644\u0646\u0635\u0648\u0635", "description": "\u062A\u0644\u062E\u064A\u0635 \u0627\u062D\u062A\u0631\u0627\u0641\u064A \u0644\u0644\u0646\u0635\u0648\u0635 \u0627\u0644\u0637\u0648\u064A\u0644\u0629 \u0628\u062F\u0642\u0629 \u0639\u0627\u0644\u064A\u0629", "data-astro-cid-fvu7qvc5": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12" data-astro-cid-fvu7qvc5> <!-- TITLE --> <header class="text-center mb-8" data-astro-cid-fvu7qvc5> <h1 class="text-3xl font-extrabold mb-3" data-astro-cid-fvu7qvc5>
📝 تلخيص احترافي للنصوص
</h1> <p class="text-gray-600 text-lg" data-astro-cid-fvu7qvc5>
ألصق أي نص طويل وسنقوم بتلخيصه تلقائياً بطريقة واضحة ومفهومة.
</p> </header> <!-- ✅ ADSENSE (TOP – SAFE) --> <div class="mb-10 border rounded-lg py-4 text-center text-gray-400 text-sm" data-astro-cid-fvu7qvc5>
🔔 إعلان (Google AdSense)
</div> <!-- TEXTAREA --> <textarea id="textInput" placeholder="ألصق النص هنا..." class="w-full h-44 p-4 border rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-purple-500" data-astro-cid-fvu7qvc5></textarea> <!-- BUTTON --> <button id="summarizeBtn" class="mt-5 w-full py-3 bg-purple-600 hover:bg-purple-700
           text-white rounded-xl text-lg font-semibold" data-astro-cid-fvu7qvc5>
تلخيص النص
</button> <!-- LOADING --> <div id="loading" class="hidden mt-6 text-center text-lg" data-astro-cid-fvu7qvc5>
⏳ جاري تلخيص النص… المرجو الانتظار
</div> <!-- RESULTS --> <div id="results" class="hidden mt-10 space-y-6" data-astro-cid-fvu7qvc5> <div data-astro-cid-fvu7qvc5> <h2 class="font-bold mb-2" data-astro-cid-fvu7qvc5>📌 الملخص السريع</h2> <div id="fast" class="box" data-astro-cid-fvu7qvc5></div> </div> <div data-astro-cid-fvu7qvc5> <h2 class="font-bold mb-2" data-astro-cid-fvu7qvc5>📌 الملخص التفصيلي</h2> <div id="detailed" class="box" data-astro-cid-fvu7qvc5></div> </div> <div data-astro-cid-fvu7qvc5> <h2 class="font-bold mb-2" data-astro-cid-fvu7qvc5>📌 النقاط الأساسية</h2> <div id="points" class="box" data-astro-cid-fvu7qvc5></div> </div> <div data-astro-cid-fvu7qvc5> <h2 class="font-bold mb-2" data-astro-cid-fvu7qvc5>📌 الكلمات المفتاحية</h2> <div id="keywords" class="box" data-astro-cid-fvu7qvc5></div> </div> <div data-astro-cid-fvu7qvc5> <h2 class="font-bold mb-2" data-astro-cid-fvu7qvc5>📌 الأسئلة المقترحة</h2> <div id="questions" class="box" data-astro-cid-fvu7qvc5></div> </div> <button id="copyBtn" class="w-full py-3 bg-gray-900 text-white rounded-xl text-lg" data-astro-cid-fvu7qvc5>
📄 نسخ جميع النتائج
</button> <!-- ✅ ADSENSE (BOTTOM – OPTIONAL) --> <div class="mt-10 border rounded-lg py-4 text-center text-gray-400 text-sm" data-astro-cid-fvu7qvc5>
🔔 إعلان (Google AdSense)
</div> </div> </section>  ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/summarize.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/summarize.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/summarize.astro";
const $$url = "/summarize";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Summarize,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
