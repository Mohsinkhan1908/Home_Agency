import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import HowWeWork from './components/HowWeWork'
import VideoReel from './components/VideoReel'
import Portfolio from './components/Portfolio'
import GetStarted from './components/GetStarted'
import Team from './components/Team'
import Pricing from './components/Pricing'
import Faq from './components/Faq'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <HowWeWork/>
    <VideoReel/>
    <Portfolio/>
    <GetStarted/>
    <Team/>
    <Pricing/>
    <Faq />
    <ContactSection/>
    <Footer />
    </>
  )
}

export default App
