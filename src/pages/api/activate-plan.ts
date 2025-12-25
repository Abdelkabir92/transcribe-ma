import fs from "fs";
import path from "path";

export async function POST({ request, cookies }) {
  const { planId } = await request.json();

  if (!planId) {
    return new Response("Invalid plan ID", { status: 400 });
  }

  // ⬅️ نحملو المستخدم الحالي
  const token = cookies.get("user_token")?.value;

  if (!token) {
    return new Response("Unauthorized", { status: 401 });
  }

  // ⬅️ نجيبو لائحة المستخدمين
  const usersPath = path.join(process.cwd(), "src/data/users.json");
  const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

  const user = users.find(u => u.id === token);

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  // ⬅️ نجيبو لائحة الخطط
  const plansPath = path.join(process.cwd(), "src/data/plans.json");
  const plans = JSON.parse(fs.readFileSync(plansPath, "utf8"));

  const plan = plans.find(p => p.id === planId);

  if (!plan) {
    return new Response("Plan not found", { status: 404 });
  }

  // ⬅️ هنااا كنطبّقو الخطة على المستخدم
  user.planId = planId;
  user.minutes = (user.minutes || 0) + plan.minutes;
  user.summaries = (user.summaries || 0) + plan.summaries;
  user.articles = (user.articles || 0) + plan.articles;

  // ⬅️ نحفظو التحديث
  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  return new Response(
    JSON.stringify({ success: true, message: "Plan activated successfully" }),
    { status: 200 }
  );
}
