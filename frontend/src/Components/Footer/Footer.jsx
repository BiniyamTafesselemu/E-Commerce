import React from 'react'
import './Footer.css'
// import pinkC from '../Assets/pinkC.jpg'
// import fullW from '../Assets/fullW.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping} from '@fortawesome/free-solid-svg-icons'
import { faTelegram } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-logo">
        <FontAwesomeIcon style={{ color:"red", fontSize:"26px" }} icon={faBagShopping} />
        <p>BIMHDA</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Product</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
            <FontAwesomeIcon icon={faHouse} />
        </div>
        <div className="footer-icons-container">
            <FontAwesomeIcon icon={faInstagram} />
        </div>
        <div className="footer-icons-container">
            <FontAwesomeIcon icon={faTelegram} />
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>copyright @ 2024 - All reserved</p>
      </div>
    </div>
  )
}

export default Footer
