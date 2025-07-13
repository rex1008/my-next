"use client"

import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Page() {

  const router = useRouter()

  const login = async () => {
    const r = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ login: "zhangsan", password: "123456" })
    })

    const data = await r.json()

    if (data.success) {
      router.push("/") // 登录成功后跳转到首页
    } else {
      alert(data.message)
    }
  }

  return (
    <div>
      <Button type='primary' onClick={e => login()}>点击登录</Button>
    </div>
  )
}
