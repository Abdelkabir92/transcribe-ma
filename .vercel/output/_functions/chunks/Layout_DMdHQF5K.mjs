import { e as createComponent, f as createAstro, n as renderHead, o as renderSlot, r as renderTemplate } from './astro/server_CnPX_WE5.mjs';
import 'clsx';
/* empty css                         */
import { parse } from 'cookie';

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const cookies = parse(Astro2.request.headers.get("cookie") || "");
  cookies["user_token"];
  const { title = "Transcribe" } = Astro2.props;
  return renderTemplate`<html lang="ar" dir="rtl" class="bg-gray-900 text-white"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><!-- ✅ Google AdSense (مرة وحدة فقط) -->${renderHead()}</head> <body class="font-sans min-h-screen"> <!-- NAVBAR --> <header class="w-full border-b border-gray-700 bg-gray-900"> <nav class="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center"> <!-- Logo --> <a href="/" class="flex items-center gap-2"> <div class="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-2 py-1 rounded-md font-bold">
TS
</div> <span class="font-semibold text-gray-200">
Transcribe.ma
</span> </a> </nav> </header> <!-- PAGE CONTENT --> <main class="max-w-6xl mx-auto px-6 py-10"> ${renderSlot($$result, $$slots["default"])} </main> <footer class="mt-20 border-t pt-6 text-sm text-gray-400 text-center space-x-4"> <a href="/about">من نحن</a> <a href="/privacy-policy">سياسة الخصوصية</a> <a href="/terms">شروط الاستخدام</a> <a href="/disclaimer">إخلاء المسؤولية</a> <a href="/contact">اتصل بنا</a> </footer> </body></html>`;
}, "C:/Users/LENOVO/transcribe_videos/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
