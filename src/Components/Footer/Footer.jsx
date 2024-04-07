import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import instagram from '../Assets/instagram.png'
import pinterest from '../Assets/pinterest.png'
import whatsapp from '../Assets/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" width='160px' />
        <p>HummingCart</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Porducts</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <img src={instagram} alt="" width='35px' />
        </div>
        <div className="footer-icons-container">
            <img src={pinterest} alt="" width='35px' />
        </div>
        <div className="footer-icons-container">
            <img src={whatsapp} alt="" width='35px' />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
