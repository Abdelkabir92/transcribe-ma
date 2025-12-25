import { parse } from "cookie";
import fs from "fs";
import path from "path";

export function getUserFromCookie(cookies: any) {
  const parsed = parse(cookies || "");
  const token = parsed["user_token"];

  if (!token) return null;

  const filePath = path.join(process.cwd(), "src/data/users.json");

  const users = JSON.parse(fs.readFileSync(filePath, "utf8"));

  const user = users.find((u: any) => u.id === token);

  return user || null;
}
