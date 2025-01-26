import React from 'react';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';         
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import CategoryList from './components/CategoryList';

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

