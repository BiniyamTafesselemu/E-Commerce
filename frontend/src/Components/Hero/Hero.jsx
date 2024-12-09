import React from 'react'
import './Hero.css'
// import blackC from '../Assets/blackC.jpg'
import transparent from '../Assets/transparent.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faArrowRight, faHandFist } from '@fortawesome/free-solid-svg-icons'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hand-hand-icon">
                <p>new</p>
                <FontAwesomeIcon style={{ color:"orange", fontSize:"90px" }} icon={faHandFist} />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>
                Latest Collection
            </div>
            <FontAwesomeIcon style={{ color:"black" }} icon={faArrowRight} />
        </div>
      </div>
      <div className="hero-right">
        <img style={{ width:"600px" }} src={transparent} alt='heroimage'/>
      </div>
    </div>
  )
}

export default Hero
