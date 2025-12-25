export async function GET() {
  return new Response(null, {
    status: 302,
    headers: {
      // حذف الكوكي الحقيقي
      "Set-Cookie": "user_token=; Path=/; Max-Age=0; HttpOnly; SameSite=Lax",

      // رجوع للهوم
      "Location": "/login"
    }
  });
}
