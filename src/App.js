import React, {useState, useEffect} from 'react'
import {commerce} from "./Ecommerce"
import { BrowserRouter, Route, Router, Routes, Link, NavLink } from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Cart from "./Cart"

// Liber.


const App = () => {

  const [products, setProducts] = useState([]);

  const fetshProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data)
  }
  
  useEffect(() =>{
    fetshProducts();

  }, [])

  console.log(products);

  return (
    <BrowserRouter>
      


    <Routes >
      <Route path='/' element={<Home />}/>
      <Route path='/Shop' element={<Shop products={products}  />}/>



    </Routes>


    </BrowserRouter>
  )
}

export default App
