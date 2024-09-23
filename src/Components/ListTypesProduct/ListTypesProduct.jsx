import React, { useState } from 'react';
import './ListTypesProduct.css';
import Tank_Top from '../Assets/TypeProduct-Tank-Top-1.png';
import Shorts from '../Assets/TypeProduct-Shorts-3.png';
import Short_Sleeve_Top from '../Assets/TypeProduct-Short-Sleeve-Top-2.png';
import Jogger from '../Assets/TypeProduct-Jogger-4.png';
import Accessory from '../Assets/TypeProduct-Accessory-5.png';
import Thermal_shirt from '../Assets/TypeProduct-Thermal-shirt-6.png';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export const ListTypesProduct = () => {
  const settings =  {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  const [menu, setMenu] = useState("Tank-Top");

  return (
    <div className='ListTypeProducts-wrap'>
      <div className="ListTypeProducts-row">
        <div className="ListTypeProducts-header ">
          <h2 className='ListTypeProducts-header__title'>DANH MỤC SẢN PHẨM</h2>
          <hr/>
        </div>
        <div className='ListTypeProducts-swipe'>
          <Slider {...settings}>
          <div onClick={()=>(setMenu("Tank-Top"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Tank-Top'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Tank_Top} alt="Tank-Top" />
                <p className="ListTypeProducts-para">Áo Ba Lỗ</p>
              </div>
            </Link>
          </div>
          <div onClick={()=>(setMenu("Short-Sleeve-Top"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Short-Sleeve-Top'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Short_Sleeve_Top} alt="" />
                <p className="ListTypeProducts-para">Áo Ngắn Tay</p>
              </div>
            </Link>
          </div>
          <div onClick={()=>(setMenu("Shorts"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Shorts'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Shorts} alt="" />
                <p className="ListTypeProducts-para">Quần Short</p>
              </div>
            </Link>
          </div>
          <div onClick={()=>(setMenu("Jogger"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Jogger'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Jogger} alt="" />
                <p className="ListTypeProducts-para">Quần Jogger</p>
              </div>
            </Link>
          </div>
          <div onClick={()=>(setMenu("Accessory"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Accessory'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Accessory} alt="" />
                <p className="ListTypeProducts-para">Phụ Kiện</p>
              </div>
            </Link>
          </div>
          <div onClick={()=>(setMenu("Thermal-Shirt"))} className="ListTypeProducts-col">
            <Link style={{ textDecoration: 'none'}} to='/Thermal-Shirt'>
              <div className="ListTypeProducts">
                <img className="ListTypeProducts-img" src={Thermal_shirt} alt="" />
                <p className="ListTypeProducts-para">Áo Giữ Nhiệt</p>
              </div>
            </Link>
          </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ListTypesProduct;