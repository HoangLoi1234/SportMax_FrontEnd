import React, {useState} from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {

  const [state, setState] = useState("Đăng Nhập");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  })

  const changeHandler = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const login = async () => {
    console.log("Hàm đăng nhập đã hoạt động!", formData);
    let responseData;
    await fetch('http://localhost:3001/login',{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else {
      alert('Email hoặc mật khẩu của bạn không đúng!!!'); 
    }
  }
  const signup = async () => {
    console.log("Hàm đăng kí đã hoạt động!",formData);
    let responseData;
    await fetch('http://localhost:3001/signup',{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    }).then((response) => response.json()).then((data) => responseData = data)

    if(responseData.success) {
      localStorage.setItem('auth-token',responseData.token);
      window.location.replace("/");
    }
    else {
      alert(responseData.errors); 
    }
  }


  return (
    <div className='loginsignup_wrap'>
      <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>{state}</h1>
          <div className="loginsignup-fields">
            {state==="Đăng Kí"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Tên của bạn'/>:<></>}
            <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Địa chỉ email của bạn'/>
            <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Mật khẩu của bạn'/>
          </div>
          <button onClick={() => {state==="Đăng Nhập"?login():signup()}}>Tiếp Tục</button>
          {state==="Đăng Kí"?<p className="loginsignup-login"> Đã có tài khoản? <span onClick={()=>{setState("Đăng Nhập")}}> Đăng nhập </span></p>
          :<p className="loginsignup-login">Tạo tài khoản?<span onClick={()=>{setState("Đăng Kí")}}> Đăng kí </span></p>}
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id=''/>
            <p>Tôi đồng ý với tài khoản và chính sách của Sport Max.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup;