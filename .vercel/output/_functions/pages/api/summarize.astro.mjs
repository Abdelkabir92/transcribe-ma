import OpenAI from 'openai';
export { renderers } from '../../renderers.mjs';

const client = new OpenAI({
  apiKey: undefined                              
});
const POST = async ({ request }) => {
  try {
    const { text } = await request.json();
    if (!text || text.trim().length < 5) {
      return new Response(JSON.stringify({
        error: "لا يوجد نص كافٍ لتلخيصه."
      }), { status: 400 });
    }
    const prompt = `
أعطني تلخيصاً احترافياً لهذا النص عبر 5 صيغ:

1. **الملخص السريع** في 3 جمل فقط  
2. **ملخص تفصيلي** (5 إلى 10 جمل)  
3. **النقاط الأساسية** على شكل نقاط  
4. **الكلمات المفتاحية المهمة**  
5. **أسئلة مقترحة لفهم النص**

النص:
${text}
`;
    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }]
    });
    const fullText = completion.choices[0].message.content ?? "";
    const result = {
      fast: fullText.split("1.")[1]?.split("2.")[0]?.trim() ?? "",
      detailed: fullText.split("2.")[1]?.split("3.")[0]?.trim() ?? "",
      points: fullText.split("3.")[1]?.split("4.")[0]?.trim() ?? "",
      keywords: fullText.split("4.")[1]?.split("5.")[0]?.trim() ?? "",
      questions: fullText.split("5.")[1]?.trim() ?? ""
    };
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (err) {
    console.error("SUMMARIZE ERROR:", err);
    return new Response(JSON.stringify({
      error: "حدث خطأ أثناء التلخيص",
      details: err
    }), { status: 500 });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
