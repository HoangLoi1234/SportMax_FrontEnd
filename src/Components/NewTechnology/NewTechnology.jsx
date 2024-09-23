import React from 'react'
import './NewTechnology.css'
import new_tech01 from "../Assets/new_tech01.png"
import new_tech02 from "../Assets/new_tech02.png"
import new_tech03 from "../Assets/new_tech03.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const NewTechnology = () => {
  const settings =  {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }
  return (
    <div className="newtech">
      <h1 className='newtech-header'>CÔNG NGHỆ MỚI</h1>
      <hr/>
      <div className="newtech-wrap">
        <Slider {...settings}>
        <div className="newtech-item">
          <img src={new_tech01} alt="new_tech01" />
        </div>
        <div className="newtech-item">
          <img src={new_tech02} alt="new_tech01" />
        </div>
        <div className="newtech-item">
          <img src={new_tech03} alt="new_tech01" />
        </div>
        </Slider>
      </div>
    </div>
  )
}

export default NewTechnology;


