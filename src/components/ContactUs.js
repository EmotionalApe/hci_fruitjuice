import React, { useState } from 'react';
import './ContactUs.css'; // Import your CSS file

const ContactUs = () => {


  return (
    <div className="contact-us-container">
    <div className="Oheading" style={{fontSize:'4rem'}}>ContactUs</div>
    <h2 style={{fontSize:'1rem', textAlign:'center'}}>Feel free to write us about your Experiences and Suggestions etc.</h2>
      <form >
        <label>
          Name:
          <input
            type="text"
            name="name"
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
          />
        </label>
        <br />
        <label>
          Message:
          <textarea
            name="message"
          />
        </label>
        <br />
        <button type="submit"  style={{color:'black', backgroundColor:'orange', borderRadius:'10%'}}>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;
