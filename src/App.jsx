import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products';
import Navbar from './components/Navbar';
import ProductDetails from './components/ProductDetails';
import { CartProvider } from './context/CartContext';
function App() {

  return (
    <>
    <CartProvider>
     <BrowserRouter>
      <Navbar/>
      <div className='mt-16'>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/abcd" element={<ProductDetails />} />
      </Routes>
      </div>
    </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
