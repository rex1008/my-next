import { NextRequest, NextResponse } from "next/server"

// 模拟后端接口
export async function POST(request: NextRequest) {
  const { login, password } = await request.json()

  // 模拟验证用户名和密码
  let result = {}
  if (login === 'zhangsan' && password === '123456') {
    result = { token: "asfafasfasfahahfyasfangasangjasgiasdgnnnajdgioyeriuiqwehnvnadf"}
  }
 
  return NextResponse.json({
    result
  })
}