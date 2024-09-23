import React from 'react'
import '../Responsive/Responsive.css'
import './Offers.css'
import offers_slider from '../Assets/offers-slider.jpg'

export const Offers = () => {
  return (
    <div className='offers grid wide'>
      <div className="offers-slider row no-gutters">
        <img src={offers_slider} alt="" className="offers__slider-img col l-12 m-12 c-12" />
      </div>
      <button className='offers__visit-btn'>Xem Ngay</button>
    </div>
  )
}

export default Offers;
