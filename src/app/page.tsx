"use client"

import React from 'react'
import { photos } from '@/data/index'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const logout = async () => {
    const r = await fetch("http://localhost:3000/api/logout", {
      method: "DELETE"
    })

    const data = await r.json()

    if (data.success) {
      router.push("/login")
    }
  }

  return (
    <div className="bg-white">
      <Button type='primary' onClick={e => logout()}>退出</Button>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {
            photos.map(item => (
              <Link href={`photos/${item.id}`} className="group" key={item.id}>
                <Image src={item.src} width={200} height={200} alt={item.alt} />
                <h3 className="mt-4 text-sm text-gray-700">{item.alt}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}
