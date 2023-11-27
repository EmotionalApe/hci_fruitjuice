import React from 'react'
import Navbar from '../components/Navbar'
import Stats from '../components/Stats'
import Footer from '../components/Footer'

const AboutUs = () => {
    return (
        <div>
            <Navbar />

            <div className='text-4xl w-full h-[100px] bg-[#ffecb2] flex justify-center'>
                About Us
            </div>

            <div className='flex flex-row  w-[70%] justify-between items-center m-auto'>
                <div className='w-[2000px] m-9'>
                    <img src={require('../assets/images/about-image-1.png')} />
                </div>

                <div>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.

                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea.

                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                </div>
            </div>
            <Stats/>
            <Footer/>
        </div>
    )
}

export default AboutUs