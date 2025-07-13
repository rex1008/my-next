import { cookies, headers } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

// export const dynamic = "force-dynamic" 缓存失效情况4

// export const revalidate = 10 缓存失效情况5

export function GET(request: NextRequest) {
  // 缓存失效情况1
  // const searchParams = request.nextUrl.searchParams // 获取query参数，会让GET请求在生产环境下缓存失效
  // const name =  searchParams.get("name")

  // 缓存失效情况2
  const cookieStore = cookies()
  const token = cookieStore.get("token")

  // 缓存失效情况3
  const headersList = headers()
  const referer = headersList.get("referer")

  // 缓存失效情况4  export const dynamic = "force-dynamic"

  // 缓存失效情况5  export const revalidate = 10 其中10表示如果当前请求距离上次请求已超过10秒，则该GET请求会自动更新一次，但是此次请求返回的仍然是更新之前的结果



  console.log("GET /api/time")

  return NextResponse.json({
    time: new Date().toLocaleTimeString(),
    token,
    referer
  })
}

export function POST() {} // 当前路由文件中出现非GET请求，则前面的GET请求同样也会在生产环境下缓存失效（即使GET请求中没有获取query参数）