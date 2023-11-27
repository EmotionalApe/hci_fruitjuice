import React from 'react'


const Navbar = () => {
    return (
        <div className="bg-[#ffecb2] w-full h-20 text-black flex justify-evenly items-center">
            <div className='font-extrabold text-3xl'>
                ArtGallery
            </div>

            <div className='flex flex-row space-x-5'>
                <div>Home</div>
                <div>About</div>
                <div>Login</div>
                <div>Sign Up</div>

            </div>

            <div>             
                    🛒 Cart
  
            </div>
        </div>
    )
}

export default Navbar