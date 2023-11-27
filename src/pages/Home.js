import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import TopProducts from '../components/TopProducts'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <TopProducts/>
    </div>
  )
}

export default Home