import React from 'react';
import MainPage from './components/MainPage';
import { Route, Routes } from 'react-router-dom';         
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import CategoryList from './components/CategoryList';
import CategoryProducts from './components/CategoryProducts';
import Login from './components/Login';
import Signup from './components/Signup'

function App() {
  return (
    <div className='max-w-screen'>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/login/" element={<Login />} />
        <Route path="/signup/" element={<Signup />} />
        <Route path="/allproducts/" element={<AllProducts />}  />
        <Route path="/categorylist/" element={<CategoryList />}  />
        <Route path="/category/:category" element={<CategoryProducts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

