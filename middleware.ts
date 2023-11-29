import { NextResponse, type NextRequest } from "next/server";

const auth_routes = [
  "/login",
  "/forgot-password",
  "/sign-up",
  "/sign-up/verify-email",
  "/sign-up/:path*",
  "/reset-password",
  "/sign-up/verification-code",
];

const unprotected_routes = ["/privacy-policy", "/terms-of-service"];

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const user = "";
  const allowedRoute = true;
  const isAuthRoute = auth_routes.includes(req.nextUrl.pathname);
  const isUnprotectedRoute = unprotected_routes.includes(req.nextUrl.pathname);
  if (user) {
    if (isAuthRoute || !allowedRoute) {
    }
  } else {
    if (!isUnprotectedRoute && !isAuthRoute)
      return NextResponse.redirect(new URL("/login", req.url));
  }
}

export const config = {
  matcher: "/",
};
