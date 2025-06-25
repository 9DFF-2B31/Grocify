import React from 'react';
import MainBanner from '../components/MainBanner';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';
import Categories from '../components/Categories';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <Categories />
      <p>this is home</p>
      <BestSeller />




      <BottomBanner/>
    </div>
  );
};

export default Home;
