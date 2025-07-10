import { Card } from 'antd'
import React from 'react'
import { data } from '@/data/index'

export default function Page({ params }: { params: { id: string } }) {
  const item = data.find(item => item.id === +params.id)
  return (
    <Card title={item?.title}>
      <p>{item?.body}</p>
    </Card>
  )
}
