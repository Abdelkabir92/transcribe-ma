import fs from "fs";

export async function POST({ request }) {
  const { id, minutes, summaries, articles } = await request.json();

  const users = JSON.parse(fs.readFileSync("src/data/users.json", "utf8"));
  const index = users.findIndex(u => u.id == id);

  if (index === -1) {
    return new Response("User not found", { status: 404 });
  }

  users[index].minutes = Number(minutes);
  users[index].summaries = Number(summaries);
  users[index].articles = Number(articles);

  fs.writeFileSync("src/data/users.json", JSON.stringify(users, null, 2));

  return new Response("OK", { status: 200 });
}
