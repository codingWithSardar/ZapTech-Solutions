import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import WhyChooseUs from '../components/WhyChooseUs'
import OutProcess from '../components/OutProcess'
import Technologies from '../components/Technologies'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <WhyChooseUs/>
        <OutProcess/>
        <Technologies/>
        <Testimonials/>
        <CTA/>
    </div>
  )
}

export default Home