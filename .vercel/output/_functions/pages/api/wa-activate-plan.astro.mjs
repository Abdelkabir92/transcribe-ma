import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  try {
    const body = await request.json();
    const { phone, planId } = body;
    if (!phone || !planId) {
      return new Response("Missing phone or planId", { status: 400 });
    }
    const usersPath = path.join(process.cwd(), "src/data/users.json");
    const plansPath = path.join(process.cwd(), "src/data/plans.json");
    const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));
    const plansDb = JSON.parse(fs.readFileSync(plansPath, "utf8"));
    const plan = plansDb.plans.find((p) => p.id === planId);
    if (!plan)
      return new Response(JSON.stringify({ error: "Plan not found" }), {
        status: 404
      });
    const user = users.users.find((u) => u.phone === phone);
    if (!user)
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404
      });
    user.minutes += plan.minutes;
    user.summaries += plan.summaries;
    user.articles += plan.articles;
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    return new Response(
      JSON.stringify({
        success: true,
        message: `🎉 تم تفعيل خطة ${plan.name} بنجاح!`,
        new_balance: {
          minutes: user.minutes,
          summaries: user.summaries,
          articles: user.articles,
          support: plan.support
        }
      }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500
    });
  }
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
