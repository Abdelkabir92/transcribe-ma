export async function POST({ request }) {
  const form = await request.formData();
  const username = form.get("username");
  const password = form.get("password");

  // ⚠️ معلومات الدخول الحقيقية ديال الأدمن
  const ADMIN_USER = "admin";
  const ADMIN_PASS = "kabir@2025"; // غادي تبدلها

  if (username === ADMIN_USER && password === ADMIN_PASS) {
    // حفظ الكوكي
    return new Response(null, {
      status: 302,
      headers: {
        "Set-Cookie": `admin_token=active; Path=/; HttpOnly; SameSite=Lax`,
        Location: "/admin",
      },
    });
  }

  return new Response(null, {
    status: 302,
    headers: { Location: "/admin-login?error=1" },
  });
}

