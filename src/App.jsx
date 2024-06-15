import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Tesrimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [playState, setPlayState] = useState(false)

  return (
    <>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Programs' title='What we offer' />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subtitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title subtitle='Testimonials' title='What Student says' />
        <Testimonials />
        <Title subtitle='Contact us' title='get in touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  )
}

export default App
