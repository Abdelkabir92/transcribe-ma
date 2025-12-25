import fs from "fs";
import path from "path";

export async function POST({ request }) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return new Response("Missing fields", { status: 400 });
  }

  // Load users.json
  const usersPath = path.join(process.cwd(), "src", "data", "users.json");
  const users = JSON.parse(fs.readFileSync(usersPath, "utf8"));

  // Find user
  const user = users.find((u) => u.email === email && u.password === password);

  if (!user) {
    return new Response("Invalid credentials", { status: 401 });
  }

  // Token is simply user.id
  const token = user.id;

  // Save cookie
  return new Response(null, {
    status: 302,
    headers: {
      "Set-Cookie": `user_token=${token}; Path=/; HttpOnly; SameSite=None; Secure`,
      "Location": "/dashboard",
    },
  });
}
