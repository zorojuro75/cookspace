import Hero from '@/component/AboutUs/Hero'
import OurStory from '@/component/AboutUs/OurStory'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div>
      <Hero />
      <OurStory />
    </div>
  )
}

export default page