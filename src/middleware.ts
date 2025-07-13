import { NextRequest } from "next/server";


export function middleware (request: NextRequest) {
  console.log("intercepting path", request.nextUrl.pathname)
}

export const config = {
  // matcher: ["/about", "/dashboard/:path*"] // /dashboard/:path* 表示诸如 /dashboard/1 或者 /dashboard/ranking/1 等这样的请求都会命中

  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}