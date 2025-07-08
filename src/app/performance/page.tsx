import React from 'react'

import imageSrc from '../../../public/performance.jpg'
import Hero from '@/components/hero'

export default function Page() {
  return (
    <div>
      <Hero imgUrl={imageSrc} altTxt='performance Image' content='performance' />
    </div>
  )
}
