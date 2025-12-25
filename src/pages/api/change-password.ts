import fs from "fs";

export async function POST({ request, cookies }) {
  const { oldPassword, newPassword } = await request.json();

  const token = cookies.get("user_token")?.value;
  if (!token) return new Response("Unauthorized", { status: 401 });

  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf8"));
  const user = users.find((u) => u.id === token);

  if (!user) return new Response("Not found", { status: 404 });

  if (user.password !== oldPassword)
    return new Response("Wrong password", { status: 400 });

  user.password = newPassword;

  fs.writeFileSync("src/data/users.json", JSON.stringify(users, null, 2));

  return new Response("Password updated");
}
