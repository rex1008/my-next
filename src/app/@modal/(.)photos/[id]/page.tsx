"use client"

import React from 'react'
import { photos } from '@/data/index'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Page({ params }: { params: { id: string }}) {
  const photo = photos.find(item => item.id === params.id)!
  const router = useRouter()
  return (
    <div className='flex justify-center items-center fixed inset-0 bg-gray-500/[.8]' onClick={e => router.back()}>
      <Image src={photo.src} width={300} height={300} className='rounded-lg' alt={photo.alt} onClick={e => e.stopPropagation()} />
    </div>
  )
}
