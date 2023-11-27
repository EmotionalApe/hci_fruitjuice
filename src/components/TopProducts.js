import React from 'react'
import './order.css';
function TopProducts() {
  return (
    <div>
    <div className="Oheading">Featured</div>
        <div className="collection-list" style={{display:'flex', flexWrap:'wrap', width:'100%', alignItems:'center'}}>
            {/* blueberry */}
            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat" style={{paddingRight:'5rem'}}>
            <div className = "text-center flex flex-col justify-center items-center">
                <img src = {require('../images/Blueberry.png')} className = "w-100 product-img" />
                <p className = "text-capitalize my-1">Blue berry Juice</p>
                <br/>  
                <span className = "fw-bold product-price">₹179900.00</span>
                <div className='font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full w-[150px] h-[50px] text-white flex items-center justify-center'>ORDER NOW</div>
                </div>
             </div>
            {/* Orange */}
            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat" style={{paddingRight:'5rem'}}>
            <div className = "text-center flex flex-col justify-center items-center">
                <img src = {require('../images/Orange.png')} className = "w-100 product-img"/>
                <p className = "text-capitalize my-1">Orange Juice</p>
                <br/>  
                <span className = "fw-bold product-price">₹179900.00</span>
                <div className='font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full w-[150px] h-[50px] text-white flex items-center justify-center'>ORDER NOW</div>
                </div>
             </div>
            {/* mango */}
            <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat" style={{paddingRight:'5rem'}}>
            <div className = "text-center flex flex-col justify-center items-center">
                <img src = {require('../images/Mango.png')} className = "w-100 product-img"/>
                <p className = "text-capitalize my-1">Mango Juice</p>
                <br/>  
                <span className = "fw-bold product-price">₹179900.00</span>
                <div className='font-bold bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 rounded-full w-[150px] h-[50px] text-white flex items-center justify-center'>ORDER NOW</div>
                </div>
             </div>
             
        </div>
    </div>
  )
}

export default TopProducts
