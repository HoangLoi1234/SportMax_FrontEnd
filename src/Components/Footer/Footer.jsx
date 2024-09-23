import React from 'react'
import './Footer.css'
import logo_footer from '../Assets/logo.png'

export const Footer = () => {
  return (
    <div className="grid ">
      <div className='footer row no-gutters'>
        <div className="footer__first-colum col l-4 m-6 c-12">
          <div className='footer-logo'>
            <img className='footer__logo-icon' src={logo_footer} alt="" />
            <h2>SPORT MAX</h2>
          </div>
          <div className="footer__info-contact">
            <ul>
              <li> 
                <span className='footer__icon-location'>
                  <i class="fa-solid fa-location-dot"></i>
                </span>
                Địa chỉ: CÔNG TY TNHH THỂ THAO SPORT MAX Số 128, phố Bùi Xương Trạch, phường Khương Đình, quận Thanh Xuân, Thành phố Hà Nội Giấy chứng nhận DKKD số 0107923723 sở Kế Hoạch và Đầu Tư Hà Nội cấp ngày 17/07/2017
              </li>
              <li>
                <span className='footer__icon-phone'>
                  <i class="fa-solid fa-phone"></i>
                </span>
                Số điện thoại: 0398410901
              </li>
              <li>
                <span className='footer__icon-mail'>
                  <i class="fa-solid fa-envelope"></i>
                </span>
                Email: lienhe@sportmax.vn
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-center col l-4 m-6 c-12">
          <div className='footer__center-wrap'>
            <h1>HỖ TRỢ && CHÍNH SÁCH</h1>
            <ul className="footer-links">
              <li>Trang chủ</li>
              <li>Nam</li>
              <li>Nữ</li>
              <li>Trẻ em</li>
              <li>Blog</li>
              <li>Hỗ trợ</li>
            </ul>
          </div>
        </div>
        <div className="footer-social col l-4 m-6 c-12">
          <div className="footer__social-wrap">
            <div className='footer__sider-email '>
              <h1>ĐĂNG KÍ THÔNG BÁO</h1>
              <div>
                <input type="email" placeholder='Nhập địa chỉ Email'/>
                <button>Đăng kí</button>
              </div>
            </div>
            <div className="footer-icons">
              <ul className='footer__icon-container'>
                <li>
                  <i class="fa-brands fa-facebook"></i>
                </li>
                <li>
                <i class="fa-brands fa-instagram"></i>
                </li>
                <li>
                  <i class="fa-solid fa-z"></i>
                </li>
                <li>
                  <i class="fa-brands fa-youtube"></i>
                </li>
                <li>
                  <i class="fa-brands fa-tiktok"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright col l-12 m-12 c-12">
          <hr/>
          <p>2024 SPORT MAX - Đã đăng kí bản quyền.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;
