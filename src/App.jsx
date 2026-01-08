import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Signup from './components/Signup'
import Products from './components/Products';
import Navbar from './components/Navbar';
function App() {

  return (
    <>
     <BrowserRouter>
      <Navbar/>
      <div className='mt-20'>
      <Routes>
        <Route path="/" element={<Products/>}/>
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
