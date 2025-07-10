import React from 'react'

import imageSrc from '../../../../public/scale.jpg'
import Hero from '@/components/hero'

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "scale"
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl={imageSrc} altTxt='scale Image' content='scale' />
    </div>
  )
}
