import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

export const Navbar = () => {

    const [menu, setMenu] = useState('shop');
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

    const handleMenuItemClick = () => {
      if (window.innerWidth <= 740) { // Apply this only for mobile viewports
        menuRef.current.classList.remove('nav-menu-visible');
        document.querySelector('.nav-dropdown').classList.remove('open');
      }
    };

  return (
    <div className='navbar'>
      <div onClick={() => { setMenu("shop"); handleMenuItemClick();}}>
        <Link style={{textDecoration: 'none'}} to='/' className="nav-logo">
          <img className="nav-logo__img" src={logo} alt="" />
          <p>
            SPORT<br/>MAX
          </p>
        </Link>
      </div>
      <div className='nav-dropdown-wrap'>
        <i  onClick={dropdown_toggle} class="fa-solid fa-circle-chevron-down nav-dropdown"></i>
      </div>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/'>Trang chủ</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={() => { setMenu("alls"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/alls'>Sản phẩm</Link>{menu==="alls"?<hr/>:<></>}</li>
        <li onClick={() => { setMenu("mens"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/mens'>Nam</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={() => { setMenu("womens"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/womens'>Nữ</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={() => { setMenu("blogs"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/blogs'>Blog</Link>{menu==="blogs"?<hr/>:<></>}</li>
        <li onClick={() => { setMenu("supports"); handleMenuItemClick(); }}><Link style={{textDecoration: 'none'}} to='/supports'>Hỗ trợ</Link>{menu==="supports"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Đăng Xuất</button>
        :<Link to='/login'><button>Đăng Nhập</button></Link>}
        <Link to='/cart'>
          <img className="nav-login-cart__img" src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar;
