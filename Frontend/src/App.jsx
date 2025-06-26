import React from 'react';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import Footer from './components/Footer';
import Cart from './pages/Cart';
import { AppContextProvider, useAppContext } from './context/AppContext';
import Login from './components/Login';
import AllProducts from './pages/AllProducts';

const App = () => {
const isSellerPath = useLocation().pathname.includes('seller');
 const {showUserLogin}=useAppContext()
  return (
    <div>
      {!isSellerPath && <Navbar />}
      {showUserLogin ? <Login/>:null}

      <Toaster />
      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts/>} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      {!isSellerPath &&<Footer/>}
    </div>
  );
};

export default App;
