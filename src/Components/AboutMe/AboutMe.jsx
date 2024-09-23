import React from 'react'
import '../Responsive/Responsive.css'
import './AboutMe.css'
import about_me from '../Assets/about-me.png'

export const AboutMe = () => {
  return (
    <div className="grid">
      <div className="about-me row">
          <div className="about-me__left col l-6 m-6 c-12">
            <img className='about-me__right-img' src={about_me} alt="" />
          </div>
          <div className="about-me__right col l-6 m-6 c-12">
            <h2 className='about-me__right-header'>Về Chúng Tôi</h2>
            <p className='about-me__right-para'>Sport Max - Thương hiệu thời trang thể thao nam ở Việt Nam từ năm 2013. Nổi tiếng với thiết kế vừa vặn và phù hợp với vóc dáng nam giới. Sản phẩm The Max mang đến sự thoải mái và linh hoạt cho cả hoạt động thể thao và hàng ngày. Thu hút đa dạng khách hàng, từ bạn trẻ đến người trưởng thành, đặc biệt là những người quan tâm đến phong cách thời trang đẹp và tiện ích.</p>
            <button className='about-me__right-prefic' onClick={() => { /* Xử lý sự kiện click nếu cần */ }}>
              Xem chi tiết
            </button>
          </div>
      </div>
    </div>
  )
}

export default AboutMe;
