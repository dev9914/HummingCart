import React from 'react'
import './Bredcrum.css'
import arrow_icon from '../Assets/bredcrum.png'

const Bredcrums = (props) => {
  const {product} = props;
  return (
    <div className='bredcrum'>
      HOME <img width='15px' src={arrow_icon} alt="" /> SHOP <img width='15px' src={arrow_icon} alt="" /> {product.category} <img width='15px' src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Bredcrums
