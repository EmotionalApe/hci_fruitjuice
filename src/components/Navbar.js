import React from 'react'


const Navbar = () => {
    return (
        <div className="bg-[#ffecb2] w-full h-20 text-black flex justify-evenly items-center">
            <div className='font-extrabold text-3xl'>
                PennyJuice
            </div>

            <div className='flex flex-row space-x-5'>
                <div>Home</div>
                <div>About</div>
                <div>Product</div>
                <div>Testimonials</div>
                <div>Contact Us</div>
            </div>
        </div>
    )
}

export default Navbar