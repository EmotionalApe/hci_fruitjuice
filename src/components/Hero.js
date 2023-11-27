import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className='bg-[#ffecb2] w-full h-[700px] flex flex-row justify-evenly text-orange-500'>
      <div className=' w-[30%] flex flex-col justify-evenly'>
        <div className='flex flex-col items-center'>
          <div className='text-4xl'>Freshly Pressed</div>
          <div className='text-9xl font-bold'>JUICE</div>
        </div>

        <div className='text-xl text-black'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore </div>
        <Link to='/cart'><div className='font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full w-[200px] h-[50px] text-white flex items-center justify-center'>ORDER NOW</div> </Link>
      </div>
      <div>
        <img src={require('../assets/images/home-hero-right.png')} alt='juice' />
      </div>
    </div>
  )
}

export default Hero