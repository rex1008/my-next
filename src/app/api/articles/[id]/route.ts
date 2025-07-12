
import db from '@/db'
import { NextResponse } from 'next/server'

interface IParams { params: { id: string }}

// DELETE => /api/articles/:id
export async function DELETE(request: Request, { params }: IParams) {
  await db.update(({ posts }) => {
    const idx = posts.findIndex(item => item.id === params.id)
    console.log("要删除第几个数据", idx)
    posts.splice(idx, 1)
  })
  return NextResponse.json({
    code: 0,
    message: "删除成功"
  })
}

export async function PATCH(request: Request, { params }: IParams) {
  const data = await request.json()
  let idx = -1
  await db.update(({ posts }) => {
    idx = posts.findIndex(item => item.id === params.id)
    posts[idx] = { ...posts[idx], ...data }
  })
  return NextResponse.json({
    code: 0,
    message: "修改成功",
    data: db.data.posts[idx]
  })
}

// GET => /api/articles/:id
export async function GET(request: Request, { params }: IParams) {
  const data = db.data.posts.find(item => item.id === params.id)
  return NextResponse.json({
    code: 0,
    message: "查找成功",
    data
  })
}