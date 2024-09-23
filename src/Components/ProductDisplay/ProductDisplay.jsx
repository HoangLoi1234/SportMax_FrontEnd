import React, { useState, useContext } from 'react';
import '../Responsive/Responsive.css';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

export const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    const [selectedSize, setSelectedSize] = useState(''); 
    const [selectedColor, setSelectedColor] = useState('');

    const handleAddToCart = () => {
        const token = localStorage.getItem('auth-token');
        if (!token) {
            alert('Vui lòng đăng nhập để thực hiện thao tác!!!');
            return;
        }

        if (selectedSize && selectedColor) {
            addToCart(product.id, selectedSize, selectedColor);
        } else {
            alert('Vui lòng chọn màu sắc và kích cỡ sản phẩm trước khi thêm vào giỏ hàng!');
        }
    };

    const handleSizeChange = (e) => {
        const size = e.target.value;
        console.log("Selected size:", size);
        setSelectedSize(size);
        // return size;
    };

    const handleColorChange = (e) => {
        const color = e.target.value;
        console.log("Selected color:", color);
        setSelectedColor(color);
        // return color;
    };

    return (
        <div className="grid wide">
            <div className='productdisplay row'>
                <div className="productdisplay-left col l-7 m-12 c-12">
                    <div className="row mobile-display">
                        <div className="productdisplay-img-list col l-2 m-2 c-12 row">
                            <img className='col-mobile c-3-mobile' src={product.image} alt="" />
                            <img className='col-mobile c-3-mobile' src={product.image} alt="" />
                            <img className='col-mobile c-3-mobile' src={product.image} alt="" />
                            <img className='col-mobile c-3-mobile' src={product.image} alt="" />
                        </div>
                        <div className="productdisplay-img col l-10 m-10 c-12">
                            <img className='productdisplay-main-img' src={product.image} alt="" />
                        </div>
                    </div>
                </div>
                <div className="productdisplay-right col l-5 m-12 c-12 ">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-prices-old">
                            {product.old_price},000₫
                        </div>
                        <div className="productdisplay-right-prices-new">
                            ${product.new_price},000₫
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                        <ul>
                            <li>Nhập mã T062401K giảm 10K cho đơn hàng từ 200K Sao chép</li>
                            <li>Nhập mã T062403K giảm 45K cho đơn hàng từ 400K Sao chép</li>
                            <li>Nhập mã T062404K giảm 70K cho đơn hàng từ 500K Sao chép</li>
                            <li>FREESHIP đơn hàng từ 300K</li>
                        </ul>
                    </div>
                    
                    {/* Dynamically rendered size dropdown */}
                    <div className="productdisplay-right-size">
                        <div className="productdisplay-right-size-wrap">
                            <h1>Kích Cỡ:</h1>
                            <div className="productdisplay-right-size-item">
                                <select value={selectedSize} onChange={handleSizeChange}>
                                    <option value="">Chọn kích cỡ</option>
                                    {product.size.map((sizeOption, index) => (
                                        <option key={index} value={sizeOption}>
                                            {sizeOption}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Dynamically rendered color dropdown */}
                        <div className="productdisplay-right-color-wrap">
                            <h1>Màu sắc:</h1>
                            <div className="productdisplay-right-color-item">
                                <select value={selectedColor} onChange={handleColorChange}>
                                    <option value="">Chọn màu sắc</option>
                                    {product.color.map((colorOption, index) => (
                                        <option key={index} value={colorOption}>
                                            {colorOption}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleAddToCart}>THÊM VÀO GIỎ</button>
                    <p className='productdisplay-right-category'>
                        <span>Gọi đặt mua: </span>
                        0398.410.901(9:00 - 22:30)
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductDisplay;
