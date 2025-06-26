import React, { useEffect, useState } from 'react';

import { createContext, useContext } from "react";
import {useNavigate} from "react-router-dom"
import { dummyProducts } from '../assets/assets';
import toast from 'react-hot-toast';


export const AppContext=createContext();

export const AppContextProvider=({children})=>{

    const currency =import.meta.VITE_CURRENCY || "$";
    const navigate=useNavigate();
    const [user,setUser]=useState(false)
    const [isSeller,setIsSeller]=useState(false)
    const [showUserLogin,setShowUserLogin]=useState(false)
    const [products,setProducts]=useState([])
    const [cartItems,setCartItems]=useState({})
    const [searchQuery,setSearchQuery]=useState({})

    //Fetch all products
    const fetchProducts= async ()=>{
        setProducts(dummyProducts)
    }
    //Add Prdoucts to cart
    const addToCart=(itemId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]+=1
        }else{
            cartData[itemId]=1
        }
        setCartItems(cartData)
        toast.success("Product added to cart")
    }

    //update cart item quantity

    const updateCartItem=(itemId,quantity)=>{
        let cartData=structuredClone(cartItems)
        cartData[itemId]=quantity
        setCartItems(cartData)
        toast.success("Cart Updated")


    }
    //remove prdoucts from cart
    const removeFromCart=(itemId)=>{
        let cartData=structuredClone(cartItems)
        if(cartData[itemId]){
            cartData[itemId]-=1
            if(cartData[itemId]===0){
                delete cartData[itemId]
            }
        }
        toast.success("removed from cart")
        setCartItems(cartData)

    }


    useEffect(()=>{
        fetchProducts()
    },[])

    const value={navigate,user,setUser,setIsSeller,isSeller,showUserLogin,setShowUserLogin,products,currency,addToCart,updateCartItem,removeFromCart,cartItems,searchQuery,setSearchQuery}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

export const useAppContext=()=>{
    return useContext(AppContext)
}