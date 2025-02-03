import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'
import Body from './components/main/Body'

function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Album 1", price: 12.99, img: "./img/Album 1.png" },
    { id: 2, name: "Album 2", price: 14.99, img: "./img/Album 2.png" },
    { id: 3, name: "Album 3", price: 9.99, img: "./img/Album 3.png" },
    { id: 4, name: "Album 4", price: 19.99, img: "./img/Album 4.png" },
    { id: 5, name: "T-Shirt", price: 19.99, img: "./img/Shirt.png" },
    { id: 6, name: "Coffee Cup", price: 6.99, img: "./img/Cofee.png" }
  ];

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  return (
  <div className="bg-gray-200 min-h-screen">
    <Navbar cart={cart} />
    <Body/>
      <Footer/>

  </div>
     
  )
}

export default App
