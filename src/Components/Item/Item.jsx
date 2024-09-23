import React from 'react'
import '../Responsive/Responsive.css'
import './Item.css'
import { Link } from 'react-router-dom'


export const Item = (props) => {
  return (
    <div className="item col l-3 m-4 c-6 grid">
      <div className="row css-background">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0, 0)} className='item-image col l-12 m-12 c-12' src={props.image} alt="" /></Link>
        <p className='item-name'>{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">
              {props.new_price},000
              <span className='item-price-unit'>₫</span>
          </div>
          <div className="item-price-old">
              {props.old_price},000
              <span className='item-price-unit'>₫</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item;
