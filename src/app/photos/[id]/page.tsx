import Image from 'next/image'
import React from 'react'
import { photos } from '@/data/index'

export default function Page({ params }: { params: { id: string } }) {
  const photo = photos.find(item => item.id === params.id)!
  return (
    <div className='container mx-auto pt-8'>
      <Image src={photo.src} width={300} height={300} className='rounded-lg block mx-auto' alt={photo.alt} />
      <div className='border-2 border-dashed border-gray-500 rounded-lg p-3 mt-6 leading-8'>
        <p>
          <strong>Title:</strong> {photo.alt}
        </p>
        <p>
          <strong>Price:</strong> {photo.price}
        </p>
        <p>
          <strong>Desc:</strong> asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
          asdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfasasdfadsfasdfasdfasdfas
        </p>
      </div>
    </div>
  )
}
