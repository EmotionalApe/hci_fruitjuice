import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import TopProducts from '../components/TopProducts'
import Footer from '../components/Footer'
import Stats from '../components/Stats'

const Home = () => {
  return (
    <>
        <Navbar/>
        <Hero/>
        <About/>
        <TopProducts/>
        <Stats/>
        <Footer/>
    </>
  )
}

export default Home