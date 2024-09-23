import React, { useContext, useState } from 'react';
import '../Components/Responsive/Responsive.css';
import './CSS/ListTypeProductsShow.css';
import { ShopContext } from '../Context/ShopContext';
import banner_categories from '../Components/Assets/banner_categories.jpg';
import Item from '../Components/Item/Item';

export const ListTypeProductsShow = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortOrder, setSortOrder] = useState('default'); 
  const [searchQuery, setSearchQuery] = useState(''); 

  const handleSort = (e) => {
    const value = e.target.value;
    setSortOrder(value);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const sortedProducts = [...all_product]
    .filter((item) => item.name.toLowerCase().includes(searchQuery)) 
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') {
        return a.new_price - b.new_price; 
      } else if (sortOrder === 'highToLow') {
        return b.new_price - a.new_price; 
      } else if (sortOrder === 'aToZ') {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === 'zToA') {
        return b.name.localeCompare(a.name); 
      }
      return 0;
    });

  return (
    <div className="grid no-gutters">
      <div className='shop-listtype row'>
        <img className='shop-listtype__banner col l-12 m-12 c-12' src={banner_categories} alt="" />
        <div className="listtypeproduct-indexSort col l-12 m-12 c-12">
          <div className="listtypeproduct-search">
            <input 
              type="text" 
              placeholder="Tìm kiếm sản phẩm" 
              value={searchQuery} 
              onChange={handleSearch} 
            />
            <i className="fa-solid fa-search"></i>
          </div>
          <div className="listtypeproduct-sort">
            <span>Sắp xếp: </span>
            <select onChange={handleSort} value={sortOrder}>
              <option value="default">Mặc định</option>
              <option value="lowToHigh">Giá tăng dần</option>
              <option value="highToLow">Giá giảm dần</option>
              <option value="aToZ">Tên A - Z</option>
              <option value="zToA">Tên Z - A</option>
            </select>
          </div>
        </div>
        <div className="grid wide">
          <div className="listtypeproduct-products row">
            {sortedProducts.map((item, i) => {
              if (props.product_type === item.product_type) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
              } else {
                return null;
              }
            })}
          </div>
        </div>
      </div>
      <div className="listtypeproduct-loadmore">
        <p className='listtypeproduct-loadmore__para'>Hiển thị thêm</p>
        <i className="fa-solid fa-angles-right"></i>
      </div>
    </div>
  );
};

export default ListTypeProductsShow;
