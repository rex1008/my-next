import { notFound } from 'next/navigation'
import React from 'react'

export default function page() {
  notFound()
  return (
    <div className='text-white'>
      test Page
    </div>
  )
}
