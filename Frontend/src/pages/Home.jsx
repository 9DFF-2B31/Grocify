import React from 'react';
import MainBanner from '../components/MainBanner';
import BestSeller from '../components/BestSeller';

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBanner />
      <p>this is home</p>
      <BestSeller />
    </div>
  );
};

export default Home;
