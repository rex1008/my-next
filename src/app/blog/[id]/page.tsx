import { Card } from 'antd'
import React from 'react'
import { data } from '@/data/index'

interface IParams { params: { id: string} }

export async function generateMetadata({ params }: IParams ) {
  return {
    title: `博客详情 - ${params.id}`,
  }
}

export default function Page({ params }: IParams) {
  const item = data.find(item => item.id === +params.id)
  return (
    <Card title={item?.title}>
      <p>{item?.body}</p>
    </Card>
  )
}
