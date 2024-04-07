import React, { useContext } from 'react'
import './Css/ShopCategory.css'
import { ShopContext } from '../Components/Context/ShopContext'
import Dropdown from '../Components/Assets/dropdown.png'
import Item from '../Components/Item/Item'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span>
        </p>
        <div className="shopcategory-sort">
          Sort by <img className='sort' src={Dropdown} alt="" width='20px' />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((e,i)=>{
          if(props.category===e.category){
            return <Item name={e.name} new_price={e.new_price} old_price={e.old_price} image={e.image} id={e.id} key={i} />
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
