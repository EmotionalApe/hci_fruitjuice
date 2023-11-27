import React from 'react'

const About = () => {
    return (
        <div className='flex flex-row justify-evenly items-center h-[500px]'>
            <div>
                <img src={require('../assets/images/home-2-left.png')} alt="oranges" />
            </div>
            <div className='flex flex-col items-center justify-evenly w-[80%]'>
                <div className='text-3xl mt-10 mb-10'>PennyJuice makes you want more!</div>
                <div className='text-xl'> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd</div>
                <div className='font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full w-[200px] h-[50px] text-white flex items-center justify-center mt-10 mb-10'>
                    ORDER NOW
                </div>

            </div>

            <div>
                <img src={require('../assets/images/home-2-right.png')} alt="kiwi" />
            </div>
        </div>
    )
}

export default About