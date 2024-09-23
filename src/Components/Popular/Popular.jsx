import React, {useState, useEffect} from 'react'
import '../Responsive/Responsive.css'
import './Popular.css'
// import data_product from '../Assets/data';
import Item from '../Item/Item';

export const Popular = () => {

  const [popularProducts, setPopularProducts] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/popularinproducts')
    .then((response) => response.json())
    .then((data) => {
      setPopularProducts(data)
    })
  },[])

  return (
    <div className='popular'>
      <h1 className='popular_header'>SẢN PHẨM NỔI BẬT</h1>
      <hr/>
      {/* Có thể thêm wide vào class để thu nhỏ khung nhìn */}
      <div className="popular-item grid wide">
        <div className='row'>
          {popularProducts.map((item, i) => {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Popular;
