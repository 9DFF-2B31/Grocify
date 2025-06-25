import React from 'react';
import MainBanner from '../components/MainBanner';
import BestSeller from '../components/BestSeller';
import BottomBanner from '../components/BottomBanner';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <p>this is home</p>
      <BestSeller />




      <BottomBanner/>
    </div>
  );
};

export default Home;
