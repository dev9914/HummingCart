import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/NewCollection'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <div className="collections">
      {new_collection.map((e,i)=>{
        return <Item name={e.name} new_price={e.new_price} old_price={e.old_price} image={e.image} id={e.id} key={i} />
      })}
      </div>
    </div>
  )
}

export default NewCollections
