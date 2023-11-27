import './Footer.css';
import React from "react";
import Siplogo from '../images/Kiwi.png';

function Footer(){
    return(
        <>
        <br />
        <br />
   <div className="footer-container" style={{paddingBottom:'1rem'}}>
      <div className="footer" style={{paddingBottom:'2rem'}}>
        <div className="footer-row-1">
        <div cclassNamelass="column 1" style={{paddingLeft:"10rem", paddingTop:"2rem"}}>
        <h3 style={{fontSize:'1.5rem', fontWeight:'600', color:'rgba(250, 107, 5, 0.822)'}}>Quick Links </h3>
            <br />
              <ui className="links" style={{listStyle:'none', display:'grid'}}>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/" style={{color:'black'}}>Home</a></li>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/about" style={{color:'black'}}>About</a></li>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/Order" style={{color:'black'}}>Products</a></li>
               <li style={{padding:'1% 4%', marginLeft:'4%'}}><a href="/ContactUs" style={{color:'black'}}>ContactUs</a></li>
               </ui>
          </div>
          <div className="column 2" style={{paddingLeft:"10rem", paddingTop:"2rem"}}>
            <h3 style={{fontSize:'2rem', fontWeight:'700', color:'rgba(250, 107, 5, 0.822)'}}>Get In Touch </h3>
            <br />
              <ul class="information">
                  <span>Survey No. 3/4, Kondhwa (Budruk)
                   Pune – 411048, Maharashtra (India)<br></br>
                  </span>
                  <br></br>
                <span> Email us : pennyjuice123@gmail <br></br></span>
                <br></br>
                <span style={{color:'rgb(151, 151, 151)'}}>Feel free to write us about your Experiences and Suggestions</span>
              </ul>
          </div>
          <div className="column 1" style={{paddingLeft:"10rem", paddingTop:"2rem"}}>
            <img className="footerlogo" src={Siplogo} alt="siplogo" style={{height:'80%',width:'90%', justifyContent:'flex-end'}}/> 
          </div>
        </div>
        </div>
        <div className="footer-row-2">
          <hr></hr>
          <div className="copyright">
            <p> ⓒ All Rights Reserved by <a href="/" style={{color:'grey'}}>PennyJuice Pvt Ltd</a> </p>
          </div>
       </div>
      </div>
        </>
    )
}

export default Footer;