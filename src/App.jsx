import React from 'react';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';         
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import CategoryList from './components/CategoryList';
import BeautyProducts from './components/BeautyProducts';
import GroceriesProducts from './components/GroceriesProduct';

function App() {
  return (
    <div className='max-w-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/allproducts/" element={<AllProducts />}  />
        <Route path="/categorylist/" element={<CategoryList />}  />
        <Route path="/category/beauty" element={<BeautyProducts />}  />
        <Route path="/category/groceries" element={<GroceriesProducts />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

