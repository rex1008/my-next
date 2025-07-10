import React from 'react'

import imageSrc from '../../../../public/performance.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "performance"
}

export default function Page() {
  return (
    <div>
      <Hero imgUrl={imageSrc} altTxt='performance Image' content='performance' />
    </div>
  )
}
