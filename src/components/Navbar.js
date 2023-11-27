import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className="bg-[#ffecb2] w-full h-20 text-black flex justify-evenly items-center">
            <div className='font-extrabold text-3xl'>
                PennyJuice
            </div>

            <div className='flex flex-row space-x-5'>
                <Link to="/"><div>Home</div></Link>
                
                <Link to='/about'><div>About</div> </Link>

                <Link to='/product'><div>Product</div></Link>

                <Link to='/contact'> <div>Contact Us</div> </Link>
                
            </div>
        </div>
    )
}

export default Navbar