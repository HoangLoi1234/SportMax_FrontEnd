import React, {useState} from 'react'
import '../Responsive/Responsive.css'
import  './Hero.css'
// import logo from '../Assets/logo.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/bodyClothes_icon.png'
import { Link } from 'react-router-dom'


export const Hero = () => {

  const [menu, setMenu] = useState("alls");

  return (
    <div className="hero-wrap grid">
      <div className='hero row no-gutters'>
        <div className="hero-left col l-6 m-6 c-12">
          <div className="hero-left__content">
            <div>
              <h2>THOẢ SỨC MUA SẮM</h2>
              <div className="hero-hand-icon">
                <p>SPORT MAX</p>
                {/* <img src={logo} alt="" /> */}
              </div>
              <p className="hero-left-p">CHUYÊN</p>
              <p className="hero-left-p">ĐỒ THỂ THAO</p>
            </div>
            <div  onClick={() => { setMenu("alls");}}>
              <Link style={{textDecoration: 'none'}} to='/alls' className="hero-latest-btn">
                <div>Tất cả sản phẩm</div>
                <img src={arrow_icon} alt="" />
              </Link>{menu==="alls"?<></>:<></>}
            </div>
          </div>
        </div>
        <div className="hero-right col l-6 m-6 c-12">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Hero;
