import React from 'react'
import './RelatedProduct.css'
import data_product from '../Assets/exclusive_image'
import Item from '../Item/Item'

const RelatedProduct = () => {
  return (
    <div className='relatedproduct'>
      <h1>Related Products</h1>
      <div className="relatedproduct-item">
        {data_product.map((e,i)=>{
            return <Item name={e.name} new_price={e.new_price} old_price={e.old_price} image={e.image} id={e.id} key={i} />
        })}
      </div>
    </div>
  )
}

export default RelatedProduct
