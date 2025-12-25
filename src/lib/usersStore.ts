import fs from "fs";
import path from "path";

const usersPath = path.join(process.cwd(), "src", "data", "users.json");

// تحميل المستخدمين
export function loadUsers() {
  try {
    const file = fs.readFileSync(usersPath, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error("Error loading users:", err);
    return [];
  }
}

// حفظ المستخدمين
export function saveUsers(users: any) {
  try {
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2), "utf8");
  } catch (err) {
    console.error("Error saving users:", err);
  }
}

// الحصول على المستخدم من خلال ID
export function getUserById(id: string) {
  const users = loadUsers();
  return users.find((u: any) => u.id == id);
}

// تحديث المستخدم
export function updateUser(updatedUser: any) {
  const users = loadUsers();
  const index = users.findIndex((u: any) => u.id == updatedUser.id);

  if (index === -1) return false;

  users[index] = updatedUser;
  saveUsers(users);
  return true;
}
