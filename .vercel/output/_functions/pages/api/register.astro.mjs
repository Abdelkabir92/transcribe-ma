import fs from 'fs';
import path from 'path';
export { renderers } from '../../renderers.mjs';

async function POST({ request }) {
  const { name, email, password } = await request.json();
  if (!email || !password) {
    return new Response("Missing fields", { status: 400 });
  }
  const filePath = path.join(process.cwd(), "src/data/users.json");
  let users = [];
  if (fs.existsSync(filePath)) {
    users = JSON.parse(fs.readFileSync(filePath, "utf8"));
  }
  const newUser = {
    id: Date.now().toString(),
    name,
    email,
    password
  };
  users.push(newUser);
  fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
  return new Response("OK");
}

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
