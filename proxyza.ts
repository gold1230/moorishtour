import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const response = NextResponse.next();

  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-inline' 'unsafe-eval';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: blob: https:;
    font-src 'self' data:;
    connect-src 'self' https:;
    frame-src 'self' https://www.google.com https://www.youtube.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'self';
    upgrade-insecure-requests;
    
  `
    .replace(/\n/g, " ")
    .trim();

  response.headers.set(
    "Content-Security-Policy",
    csp
  );

  return response;
}

export const config = {
  matcher: "/:path*",
};