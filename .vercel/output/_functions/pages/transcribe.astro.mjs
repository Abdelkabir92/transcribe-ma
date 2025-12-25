import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_CnPX_WE5.mjs';
import { $ as $$Layout } from '../chunks/Layout_DMdHQF5K.mjs';
export { renderers } from '../renderers.mjs';

const $$Transcribe = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "\u062A\u062D\u0648\u064A\u0644 \u0627\u0644\u0635\u0648\u062A \u0623\u0648 \u0627\u0644\u0641\u064A\u062F\u064A\u0648 \u0625\u0644\u0649 \u0646\u0635 \u{1F3A7}" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="max-w-3xl mx-auto px-4 py-12"> <!-- TITLE --> <header class="text-center mb-10"> <h1 class="text-3xl font-extrabold mb-3">
تحويل الصوت أو الفيديو إلى نص
</h1> <p class="text-gray-500 text-lg">
ارفع ملفك الصوتي أو الفيديو وسيتم تحويله تلقائياً
      إلى نص مكتوب أو Subtitles بدقة عالية.
</p> </header> <!-- ✅ ADSENSE (TOP – SAFE) --> <div class="mb-10 border rounded-lg py-4 text-center text-gray-400 text-sm">
🔔 إعلان (Google AdSense)
</div> <!-- UPLOAD --> <div id="dropArea" class="border-2 border-dashed rounded-xl p-10 text-center cursor-pointer
           hover:border-purple-500 transition"> <p class="text-lg">
📁 اسحب الملف هنا أو اضغط للاختيار
</p> <p class="text-sm text-gray-500 mt-2">
يدعم MP3 / WAV / MP4 / MKV
</p> <input id="fileInput" type="file" accept="audio/*,video/*" hidden> <p id="fileName" class="mt-3 text-sm text-gray-600"></p> </div> <!-- ACTIONS --> <div class="flex gap-4 mt-6"> <button id="btnText" class="flex-1 bg-purple-600 hover:bg-purple-700
             text-white py-3 rounded-xl font-semibold">
📝 تحويل إلى نص
</button> </div> <p id="status" class="mt-4 text-sm text-gray-600 text-center"></p> <!-- INFO (IMPORTANT FOR ADSENSE) --> <div class="mt-12 text-gray-600 text-sm leading-relaxed space-y-3"> <p>
✔ لا يتم تخزين الملفات بعد المعالجة.
</p> <p>
✔ النتائج يتم إنشاؤها آلياً وقد تحتوي على أخطاء.
</p> <p>
✔ ننصح بمراجعة النص قبل استعماله لأغراض رسمية.
</p> </div> <!-- ✅ ADSENSE (BOTTOM – OPTIONAL) --> <div class="mt-12 border rounded-lg py-4 text-center text-gray-400 text-sm">
🔔 إعلان (Google AdSense)
</div> </section> ${renderScript($$result2, "C:/Users/LENOVO/transcribe_videos/src/pages/transcribe.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "C:/Users/LENOVO/transcribe_videos/src/pages/transcribe.astro", void 0);

const $$file = "C:/Users/LENOVO/transcribe_videos/src/pages/transcribe.astro";
const $$url = "/transcribe";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Transcribe,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
