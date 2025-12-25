import fs from "fs";
import path from "path";

export async function POST({ request }) {
  const data = await request.formData();

  const userId = data.get("userId");
  const type = data.get("type");   // minutes | summaries | articles
  const value = data.get("value"); // الرقم
  

  if (!userId || !type || !value) {
    return new Response("Missing fields", { status: 400 });
  }

  const filePath = path.join(process.cwd(), "src/data/users.json");
  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const user = users.find((u) => String(u.id) === String(userId));

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  // 🟢 هنا المنطق الجديد
  if (type === "minutes") {
    user.minutes = (user.minutes || 0) + Number(value);
  }

  if (type === "summaries") {
    user.summaries = (user.summaries || 0) + Number(value);
  }

  if (type === "articles") {
    user.articles = (user.articles || 0) + Number(value);
  }

  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));

  return new Response(null, {
    status: 302,
    headers: { Location: "/admin" },
  });
}
