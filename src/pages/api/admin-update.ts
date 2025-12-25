import fs from "fs";
import path from "path";

export async function POST({ request }) {
  const form = await request.formData();
  const id = form.get("id");
  const addMinutes = Number(form.get("minutes"));

  const usersPath = path.join(process.cwd(), "src/data/users.json");
  const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

  const user = users.find(u => u.id === id);

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  // ⬅ زيادة الرصيد
  user.minutes = (user.minutes || 0) + addMinutes;

  fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));

  return Response.redirect("/admin");
}
