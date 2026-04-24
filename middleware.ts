import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const authCookie = request.cookies.get("admin_auth");
  const isAuthenticated = authCookie?.value === "true";

  // Check if it's an admin route
  if (pathname.startsWith("/admin")) {
    // Exclude login page from protection
    if (pathname === "/admin/login") {
      // If already authenticated and trying to access login, redirect to dashboard
      if (isAuthenticated) {
        return NextResponse.redirect(new URL("/admin/dashboard", request.url));
      }
      return NextResponse.next();
    }

    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/admin/login", request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/admin/:path*",
};
