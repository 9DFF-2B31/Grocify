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
import ProductCategory from './pages/ProductCategory';
import ProductDetails from './pages/ProductDetails';
import AddAddress from './pages/AddAddress';
import MyOrders from './pages/MyOrders';
import SellerLogin from './components/seller/SellerLogin';
import SellerLayout from './pages/seller/SellerLayout';
import AddProduct from './components/seller/AddProduct';
import ProductList from './components/seller/ProductList';
import Orders from './components/seller/Orders';
import Contact from './pages/Contact';
import Loading from './components/Loading';

import BotDesign from './components/BotDesign';


const App = () => {
  const isSellerPath = useLocation().pathname.includes('seller');
  const { showUserLogin, isSeller } = useAppContext()
  return (
    <div className='text-default min-h-screen text-gray-700 bg-white'>
      {!isSellerPath && <Navbar />}
      {showUserLogin ? <Login /> : null}

      <Toaster />
      <div className={`${isSellerPath ? '' : 'px-6 md:px-16 lg:px-24 xl:px-32'}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
          <Route path='/products/:category' element={<ProductCategory />} />
          <Route path='/products/:category/:id' element={<ProductDetails />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/add-address' element={<AddAddress />} />
          <Route path='/my-orders' element={<MyOrders />} />
          <Route path='/loader' element={<Loading />} />

          <Route path='/seller' element={isSeller ? <SellerLayout /> : <SellerLogin />}>
            <Route index element={isSeller ? <AddProduct /> : null} />
            <Route path='product-list' element={<ProductList />} />
            <Route path='orders' element={<Orders />} />
          </Route>


        </Routes>

      </div>
       <BotDesign />
      {!isSellerPath && <Footer />}

    </div>
  );
};

export default App;
