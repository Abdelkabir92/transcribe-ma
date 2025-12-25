// src/pages/api/change-email.ts
import fs from "fs";
import type { APIRoute } from "astro";

export const prerender = false;

const USERS_PATH = "src/data/users.json";

export const POST: APIRoute = async ({ request, cookies }) => {
  try {
    // نقرأ الداتا اللي جاية من الفورم (JSON)
    const { newEmail } = await request.json();

    if (!newEmail) {
      return new Response(JSON.stringify({ error: "email is required" }), {
        status: 400,
      });
    }

    // نجيب التوكن من الكوكي
    const token = cookies.get("user_token")?.value;
    if (!token) {
      return new Response(JSON.stringify({ error: "unauthorized" }), {
        status: 401,
      });
    }

    // نقرأ users.json
    const raw = fs.readFileSync(USERS_PATH, "utf8");
    const users = JSON.parse(raw);

    // نلقى اليوزر ديال هاد التوكن
    const user = users.find((u: any) => u.id === token);
    if (!user) {
      return new Response(JSON.stringify({ error: "user not found" }), {
        status: 404,
      });
    }

    // تأكد ماكاينش واحد آخر عندو نفس الإيميل
    const exists = users.find(
      (u: any) => u.email === newEmail && u.id !== token
    );
    if (exists) {
      return new Response(JSON.stringify({ error: "email already used" }), {
        status: 400,
      });
    }

    // نبدّل الإيميل
    user.email = newEmail;

    // نكتب users.json من جديد
    fs.writeFileSync(USERS_PATH, JSON.stringify(users, null, 2));

    return new Response(JSON.stringify({ message: "email updated" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("CHANGE EMAIL ERROR:", err);
    return new Response(JSON.stringify({ error: "server error" }), {
      status: 500,
    });
  }
};
