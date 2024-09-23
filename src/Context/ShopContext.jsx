import React, { createContext, useState, useEffect} from "react";
// import all_product from '../Components/Assets/all_product';
 
export const ShopContext = createContext(null);
 
const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = { quantity: 0, size: '', color: '' };
  }
  return cart;
}
 
const ShopContextProvider = (props) => {
 
  const [all_product, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart());
 
    useEffect(() => {
        // Lấy tất cả sản phẩm
      fetch('http://localhost:3001/allproducts')
      .then((response) => response.json())
      .then((data)=>setAll_Product(data))
 
       // Nếu người dùng đã đăng nhập, lấy thông tin giỏ hàng từ backend
      if(localStorage.getItem('auth-token')){
        //console.log(localStorage.getItem('auth-token'));
        fetch('http://localhost:3001/getcart',{
          method: 'POST',
          headers: {
            Accept: 'application/form-data',
            'auth-token': `${localStorage.getItem('auth-token')}`,
            'Content-Type': 'application/json',
          },
          body:"",
        }).then((response) => response.json())
      .then((data) => setCartItems(data));
      }
    },[])
 
  // Modified addToCart function to include size and color
  const addToCart = (itemId, size, color) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]+1}));
    if(localStorage.getItem('auth-token')){
      fetch('http://localhost:3001/addtocart',{
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId, size, color}),
      })
      .then((response) => response.json())
      .then((data)=>console.log(data));
    }
  };
 
  const removeFromCart = (itemId, size, color) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId]-1}));
 
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:3001/removefromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId, size, color }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };
 
 
  // const removeAllFromCart = (itemId) => {
  //   setCartItems((prev) => {
  //     const { [itemId]: _, ...rest } = prev;
  //     return rest;
  //   });
  // };
  const removeAllFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        quantity: 0, // Đặt số lượng sản phẩm về 0
      },
    }));
 
    if (localStorage.getItem('auth-token')) {
      fetch('http://localhost:3001/removeallfromcart', {
        method: 'POST',
        headers: {
          Accept: 'application/form-data',
          'auth-token': `${localStorage.getItem('auth-token')}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      })
      .then((response) => response.json())
      .then((data) => console.log(data));
    }
  };
 
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount;
  };
 
  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };
 
  const getShippingFee = (totalAmount) => {
    return totalAmount >= 300 ? 0 : 50;
  };
 
  const contextValue = {
    getTotalCartItems,
    getTotalCartAmount,
    getShippingFee,
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    removeAllFromCart
  };
 
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
 
export default ShopContextProvider;
 
 