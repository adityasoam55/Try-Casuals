import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import ContentPage from './ContentPage';
import AboutHebe from './AboutHebe';
import BottomItemPage from './BottomItemPage';
import NoticePage from './NoticePage';
import ProductListScroll from './ProductListScroll';
import MainVideo from './MainVideo';
import BrandsLogo from './BrandsLogo';
import AsideSecond from './AsideSecond';
import AsideFirst from './AsideFirst';

function MainPage() {
  return (
    <div className='flex flex-col box-border overflow-x-hidden'>
    <NavBar />
    <ContentPage />
    <AboutHebe />
    <ProductListScroll />
    <MainVideo />
    <BrandsLogo />
    <AsideFirst />
    <AsideSecond />
    <NoticePage />
    <BottomItemPage />
    <Footer />
  </div>
  )
}

export default MainPage;
