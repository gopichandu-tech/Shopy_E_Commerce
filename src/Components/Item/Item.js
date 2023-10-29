import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <div className='item'>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt=''/></Link>
          <div className='item-name'><p>{props.name}</p></div>
          <div className='item-price'>
              <div className='item-price-new'>
                ${(50 * props.price) / 100} 
              </div>
              <div className='item-price-old'>
                  <span>${props.price}</span> 50% off
              </div>
          </div>
    </div>

  )
}

export default Item
