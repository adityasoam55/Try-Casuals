import React from 'react';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';         
import NavBar from './NavBar';
import Footer from './Footer';
import AllProducts from './AllProducts';
import CategoryList from './CategoryList';

function App() {
  return (
    <div className='max-w-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/allproducts/" element={<AllProducts />}  />
        <Route path="/categorylist/" element={<CategoryList />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

