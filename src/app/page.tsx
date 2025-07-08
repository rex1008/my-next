import Image from 'next/image'
import React from 'react'

import homeImageSrc from '../../public/home.jpg'
import Hero from '@/components/hero'

export default function Home() {
  return (
    <Hero imgUrl={homeImageSrc} altTxt='Home Image' content='Professional Cloud Hosting' />
  )
}
