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

function App() {
  const [cart, setCart] = useState({})
  console.log(cart);

  function handleCart(value, id) {
    console.log(`added ${value} of ${id} to cart`);
    setCart({ ...cart, [id]: value })
  }

  const cartValue = Object.values(cart).reduce((acc, curr) => acc + curr, 0);


  return (
    <div className='max-w-screen'>
      <NavBar cartValue={cartValue}/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/allproducts/" element={<AllProducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails handleCart={handleCart} />} />
        <Route path="/categorylist/" element={<CategoryList />} />
        <Route path="/category/:category" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

