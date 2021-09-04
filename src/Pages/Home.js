import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Landing />
      <div id="about">
        <About />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="clients">
        <Clients />
      </div>
      <div>
        <Footer />
      </div>
    </>
  )
}
