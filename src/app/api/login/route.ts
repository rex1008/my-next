import { NextRequest, NextResponse } from "next/server"



export async function POST(request: NextRequest) {
  const { login, password } = await request.json()

  // 调用后端服务接口
  const r = await fetch("http://localhost:3000/api/backend", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ login, password })
  })

  const data = await r.json()
  console.log("login return data", data)

  // BFF 把拿到的token 通过 cookie 的形式种植到前端
 
  let response
  if(data.result.token) {
    // 登录成功
    response = NextResponse.json({
      success: true,
      message: "登录成功"
    })
  
    // 将token种植到浏览器
    response.cookies.set("token", data.result.token, {
      path: "/",
      maxAge: 86400,
      httpOnly: true
    })
  } else {
    // 登录失败
    response = NextResponse.json({
      success: false,
      message: "用户名密码错误"
    })
  }

  return response
}