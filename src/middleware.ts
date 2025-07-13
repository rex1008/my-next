import { NextRequest, NextResponse } from "next/server";


export function middleware (request: NextRequest) {
  console.log("intercepting path", request.nextUrl.pathname)

  // 所有的非登录页请求，判断是否携带token，以及校验token的有效性
  if (request.nextUrl.pathname !== '/login') {
    const token = request.cookies.get("token")?.value
    if(!token || token !== "asfafasfasfahahfyasfangasangjasgiasdgnnnajdgioyeriuiqwehnvnadf") {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }
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