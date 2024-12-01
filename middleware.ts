import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.AUTH_SECRET });
  const { pathname } = req.nextUrl;

  if (token && (pathname === "/auth/login" || pathname === "/auth/join")) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!token && pathname.startsWith("/")) {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/auth/login", "/auth/join"], // Apply middleware to specific routes
};
