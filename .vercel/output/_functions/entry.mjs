import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BnG-c7wH.mjs';
import { manifest } from './manifest_DAGPS6Nx.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/article.astro.mjs');
const _page3 = () => import('./pages/api/register.astro.mjs');
const _page4 = () => import('./pages/api/request-password-reset.astro.mjs');
const _page5 = () => import('./pages/api/reset-password.astro.mjs');
const _page6 = () => import('./pages/api/send-email.astro.mjs');
const _page7 = () => import('./pages/api/summarize.astro.mjs');
const _page8 = () => import('./pages/api/transcribe.astro.mjs');
const _page9 = () => import('./pages/api/translate.astro.mjs');
const _page10 = () => import('./pages/api/translate-live.astro.mjs');
const _page11 = () => import('./pages/api/wa-activate-plan.astro.mjs');
const _page12 = () => import('./pages/article.astro.mjs');
const _page13 = () => import('./pages/contact.astro.mjs');
const _page14 = () => import('./pages/dashboard.astro.mjs');
const _page15 = () => import('./pages/disclaimer.astro.mjs');
const _page16 = () => import('./pages/privacy-policy.astro.mjs');
const _page17 = () => import('./pages/register.astro.mjs');
const _page18 = () => import('./pages/result.astro.mjs');
const _page19 = () => import('./pages/summarize.astro.mjs');
const _page20 = () => import('./pages/terms.astro.mjs');
const _page21 = () => import('./pages/transcribe.astro.mjs');
const _page22 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/article.ts", _page2],
    ["src/pages/api/register.ts", _page3],
    ["src/pages/api/request-password-reset.ts", _page4],
    ["src/pages/api/reset-password.ts", _page5],
    ["src/pages/api/send-email.ts", _page6],
    ["src/pages/api/summarize.ts", _page7],
    ["src/pages/api/transcribe.ts", _page8],
    ["src/pages/api/translate.ts", _page9],
    ["src/pages/api/translate-live.ts", _page10],
    ["src/pages/api/wa-activate-plan.ts", _page11],
    ["src/pages/article.astro", _page12],
    ["src/pages/contact.astro", _page13],
    ["src/pages/dashboard.astro", _page14],
    ["src/pages/disclaimer.astro", _page15],
    ["src/pages/privacy-policy.astro", _page16],
    ["src/pages/register.astro", _page17],
    ["src/pages/result.astro", _page18],
    ["src/pages/summarize.astro", _page19],
    ["src/pages/terms.astro", _page20],
    ["src/pages/transcribe.astro", _page21],
    ["src/pages/index.astro", _page22]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = {
    "middlewareSecret": "f29c3b18-5ce3-454b-91e3-2e0bfe932f37",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
