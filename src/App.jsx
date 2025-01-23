import React from 'react';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';         
import NavBar from './NavBar';
import Footer from './Footer';
import AllProducts from './AllProducts';

function App() {
  return (
    <div className='max-w-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/allproducts/" element={<AllProducts />}  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

