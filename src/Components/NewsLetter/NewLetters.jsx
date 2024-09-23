import React from 'react'
import '../Responsive/Responsive.css'
import './NewsLetters.css'
import slider_1_email_discount from'../Assets/slider_1-email_discount.jpg'


export const NewLetters = () => {
  return (
      <div className="newsletter-sider grid wide">
        <div className="row">
          <div className='newsletter col l-12 m-12 c-12'>
            <img className='slider__email-discount' src={slider_1_email_discount} alt="" />
          </div>
        </div>
      </div>
  )
}

export default NewLetters;
