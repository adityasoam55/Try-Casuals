import React from 'react';
import MainPage from './MainPage';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/allproducts/"  />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

