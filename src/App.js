import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Blog from './Pages/Blog';
import Support from './Pages/Support';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup'; 
import Footer from './Components/Footer/Footer';
import banner_categories from './Components/Assets/banner_categories.jpg'
import ListTypeProductsShow from './Pages/ListTypeProductsShow';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/alls' element={<ShopCategory banner={banner_categories} category="all"/>}/>
          <Route path='/mens' element={<ShopCategory banner={banner_categories} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={banner_categories} category="women"/>}/>
          <Route path='/blogs' element={<Blog category="blog"/>}/>
          <Route path='/supports' element={<Support category="support"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>

          {/* List type product */}
          <Route path='/Tank-Top' element={<ListTypeProductsShow banner={banner_categories} product_type="Tank-Top"/>}/>

          <Route path='/Short-Sleeve-Top' element={<ListTypeProductsShow banner={banner_categories} product_type="Short-Sleeve-Top"/>}/>

          <Route path='/Shorts' element={<ListTypeProductsShow banner={banner_categories} product_type="Shorts"/>}/>


          <Route path='/Jogger' element={<ListTypeProductsShow banner={banner_categories} product_type="Jogger"/>}/>


          <Route path='/Accessory' element={<ListTypeProductsShow banner={banner_categories} product_type="Accessory"/>}/>


          <Route path='/Thermal-Shirt' element={<ListTypeProductsShow banner={banner_categories} product_type="Thermal-Shirt"/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
