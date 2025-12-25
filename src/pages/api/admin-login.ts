import fs from "fs";
import path from "path";

export async function POST({ request }) {
  try {
    const { username, password } = await request.json();

    const filePath = path.join(process.cwd(), "src/data/users.json");
    const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

    // نلقاو الأدمين عبر id
    const admin = users.find(u => u.id === "admin");

    // Debug
    console.log("USERNAME:", username);
    console.log("PASSWORD:", password);
    console.log("ADMIN FOUND:", admin);

    if (!admin) {
      return new Response(JSON.stringify({ ok: false, msg: "No admin in file" }), {
        status: 401
      });
    }

    // التحقق الصحيح
    if (username !== admin.id || password !== admin.password) {
      return new Response(JSON.stringify({ ok: false, msg: "Invalid login" }), {
        status: 401
      });
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200
    });
  } catch (err) {
    console.log("ERROR:", err);
    return new Response(JSON.stringify({ ok: false, error: err.message }), {
      status: 500
    });
  }
}
