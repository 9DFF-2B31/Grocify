import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"

const App = () => {
  return (
    <div>
      <Navbar/>

      <Toaster />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />

          
        </Routes>
      </div>
    </div>
  )
}

export default App
