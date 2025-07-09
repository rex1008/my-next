import React from 'react'

import imageSrc from '../../../../public/reliability.jpg'
import Hero from '@/components/hero'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "reliability"
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl={imageSrc} altTxt='reliability Image' content='reliability' />
    </div>
  )
}
