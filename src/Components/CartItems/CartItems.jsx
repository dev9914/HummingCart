import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../Context/ShopContext'
import removeIcon from '../Assets/removeIcon.png'

const CartItems = () => {
    const {getTotalAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
             <hr />
        {all_product.map((e)=>{
            if(cartItems[e.id]>0){
                return<div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} className='carticon-product-icon' alt="" />
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className='cartitems-remove-icon' src={removeIcon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                </div>
            }
            return null
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p className='totalAmount'>${getTotalAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p className='shipping'>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3 className='mainTotal'>${getTotalAmount()}</h3>
              </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
              <input type="text" placeholder='promo code' />
              <button>Submit</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default CartItems
