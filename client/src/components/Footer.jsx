import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className='c-content footer-link'>
        <div className="logo-side">
          <img src="/assets/logi1.png" className="logo-img"/>
          {/* <h3 className="logo-text">Job<span>Portal</span></h3> */}
        </div>
        <p className='f-text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed placeat dicta unde laboriosam a ad, dolore optio expedita. Iste praesentium obcaecati optio incidunt earum non saepe ex eos! Enim veniam,Lorem ipsum dolor sit amet adipisicing edit. Lorem ipsum dolor sit amet consectetur  Doloribus, consequuntur.</p>
        <div className="footer-social-links">
           <p><FaFacebookF/></p>
           <p><FaInstagram/></p>
           <p><FaLinkedinIn/></p>
           <p><FaTwitter/></p>
        </div>
        </div>
        <div className='footer-link'>
            <h2>Resources</h2>
            <p>SaaS Deveopment</p>
            <p>Our Product</p>
            <p>User Flow</p>
            <p>User Strategy</p>
            Term & Privacy
        </div>
        <div className='footer-link'>
            <h2>Company </h2>
            <p>About Us</p>
            <p>About TailGrids</p>
            <p>Contact & Support</p>
            <p>Success History</p>
            <p>Setting & Privacy</p>

        </div>
        <div className='footer-link'>
            <h2>Quick Links</h2>
            <p>Premium Support</p>
            <p>Our Services</p>
            <p>Know Our Team</p>
            <p>Explore Here</p>
            <p>Download App</p>
        </div>  
        </div>
        <div className="footer-patti">
          copyright ©️ Workcation 2024 All right deserved    
        </div> 
    </>
  )
}

export default Footer
