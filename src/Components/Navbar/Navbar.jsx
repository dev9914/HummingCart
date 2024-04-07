import React, { useContext, useState } from 'react' 
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cartIcon from '../Assets/cart.png'
import { ShopContext } from '../Context/ShopContext'

const Navbar = () => {

  const [menu, setMenu] = useState('shop');
  const {getTotalCartItems} = useContext(ShopContext)
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="" width='140px' />
        <p>HummingCart</p>
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><Link className='Link' to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("men")}}><Link className='Link' to='/men'>Men</Link>{menu==="men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("women")}}><Link className='Link' to='/women'>Women</Link>{menu==="women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("kids")}}><Link className='Link' to='kid'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li> 
      </ul>
      <div className="nav-login-cart">
        <button><Link className='Link' to="/login">Login</Link></button>
        <Link className='Link' to='/cart'><img src={cartIcon} alt="" width='40px' /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
