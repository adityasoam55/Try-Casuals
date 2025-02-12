import React, { createContext, useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom'; // Import useNavigate
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import AllProducts from './components/AllProducts';
import CategoryList from './components/CategoryList';
import CategoryProducts from './components/CategoryProducts';
import Login from './components/Login';
import Signup from './components/Signup';
import ProductDetails from './components/ProductDetails';
import CartPage from './components/CartPage';
import ComingSoon from './components/ComingSoon';
import BodyCare from './components/BodyCare';
import NewArrivals from './components/NewArrivals';
import axios from 'axios';
import Loading from './components/Loading';


export const UserContext = createContext();
function App() {

  const navigate = useNavigate(); // Add navigate hook
  const savedString = localStorage.getItem('cart') || '{}';
  const savedCart = JSON.parse(savedString);

  const [user, setUser] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [cart, setCart] = useState(savedCart);

  useEffect(() => {
    const token = localStorage.getItem('userToken'); // Get token inside useEffect

    if (token) {
      axios.get('https://myeasykart.codeyogi.io/me', {
        headers: {
          Authorization: token,
        },
      })
        .then(resp => {
          setUser(resp.data);
          setLoadingUser(false);
        })
        .catch(() => {
          localStorage.removeItem('userToken'); // If token is invalid, remove it
          setUser(null);
          setLoadingUser(false);
          navigate('/login'); // Redirect to login if token is invalid
        });
    } else {
      setUser(null);
      setLoadingUser(false);
    }
  }, []); // Empty dependency to run once on mount

  function handleLogout() {
    localStorage.removeItem('userToken');
    setUser(null);
    navigate('/login'); // Redirect immediately
  }

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

  if (loadingUser) {
    return <Loading />;
  }

  return (
    <div className="max-w-screen">
      <UserContext.Provider value={{ user, setUser }}>
        <NavBar cartValue={cartValue} handleLogout={handleLogout} user={user} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login/" element={<Login  />} />
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
      </UserContext.Provider>
    </div>
  );
}

export default App;
