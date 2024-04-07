import React from 'react'
import './Hero.css'
import handIcon from '../Assets/handIcon.png'
import arrowIcon from '../Assets/arrowIcon.png'
import heroImage from '../Assets/heroImage.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={handIcon} alt="" />
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrowIcon} width="25px" alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroImage} alt="" />
      </div>
    </div>
  )
}

export default Hero
