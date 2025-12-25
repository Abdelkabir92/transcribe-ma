import { parse } from 'cookie';
import 'es-module-lexer';
import './chunks/astro-designed-error-pages_h6vPakjs.mjs';
import './chunks/astro/server_CnPX_WE5.mjs';
import 'clsx';
import { s as sequence } from './chunks/index_C7MP5GBn.mjs';

function onRequest$1({ request, url }, next) {
  const cookies = parse(request.headers.get("cookie") || "");
  const token = cookies["user_token"];
  const pathname = url.pathname;
  if (pathname.startsWith("/admin") || pathname.startsWith("/api/admin")) {
    return next();
  }
  const publicRoutes = [
    "/",
    "/login",
    "/register",
    "/pricing",
    "/forgot-password",
    "/reset-password"
  ];
  if (publicRoutes.some((route) => pathname.startsWith(route))) {
    return next();
  }
  const protectedRoutes = [
    "/pricing"
  ];
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return Response.redirect(url.origin + "/login?redirect=" + pathname, 302);
    }
  }
  return next();
}

const onRequest = sequence(
	
	onRequest$1
	
);

export { onRequest };
