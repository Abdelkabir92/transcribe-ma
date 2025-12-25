import { parse } from "cookie";

export function onRequest({ request, url }, next) {
  const cookies = parse(request.headers.get("cookie") || "");
  const token = cookies["user_token"];

  const pathname = url.pathname;

  // صفحات الأدمين خارجة من الحماية
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    return next();
  }

  // صفحات مفتوحة للجميع
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/pricing",
    "/forgot-password",
    "/reset-password"
  ];

  // نخليه يدوز إلى أي صفحة كتبدأ بأحد الروتات المفتوحة
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return next();
  }

  // صفحات محمية
  const protectedRoutes = [
    
  
    "/pricing",
  
    
  ];

  if (protectedRoutes.some(route => pathname.startsWith(route))) {
    if (!token) {
      return Response.redirect(url.origin + "/login?redirect=" + pathname, 302);
    }
  }

  return next();
}
