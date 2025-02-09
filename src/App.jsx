import React, { useState } from 'react';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import CategoryList from './components/CategoryList';
import CategoryProducts from './components/CategoryProducts';
import Login from './components/Login';
import Signup from './components/Signup'
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import ComingSoon from './components/ComingSoon';
import BodyCare from './components/BodyCare';
import NewArrivals from './components/NewArrivals';

function App() {
  const savedString = localStorage.getItem('cart') || '{}';
  const savedCart = JSON.parse(savedString)

  const [cart, setCart] = useState(savedCart);
  // console.log(cart);

  function handleAddCart(count, productId) {
    let oldCount = cart[productId] || 0;

    let newCart = { ...cart, [productId]: oldCount + count };
    updateCart(newCart);
  }

  function updateCart(newCart) {
    setCart(newCart);

    localStorage.setItem('cart', JSON.stringify(newCart));
  }


  const cartValue = Object.values(cart).reduce((acc, curr) => acc + curr, 0);


  return (
    <div className='max-w-screen '>
      <NavBar cartValue={cartValue} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/allproducts/" element={<AllProducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails handleAddCart={handleAddCart} />} />
        <Route path="/categorylist/" element={<CategoryList />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
        <Route path="/cartpage/" element={<CartPage cart={cart} updateCart={updateCart} />} />
        <Route path="/comingsoon/" element={<ComingSoon />} />
        <Route path="/bodycare/" element={<BodyCare />} />
        <Route path="/newarrivals/" element={<NewArrivals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

