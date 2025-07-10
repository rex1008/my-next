import React from 'react'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <div className='flex mt-6 p-6 bg-gray-500 text-white rounded-lg'>
      @children default
    </div>
  )
}