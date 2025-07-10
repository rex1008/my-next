import React from 'react'

import homeImageSrc from '../../../public/home.jpg'
import Hero from '@/components/hero'
import { Metadata } from 'next'
import { Button } from 'antd'

export const metadata: Metadata = {
  title: "Home"
}

export default function Home() {
  return (
    <div>
      {/* <Hero imgUrl={homeImageSrc} altTxt='Home Image' content='Professional Cloud Hosting' /> */}
      <Button type='primary'>Button</Button>
    </div>
  )
}
 