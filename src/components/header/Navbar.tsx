import React from 'react'

export default function Navbar(props) {
  // const [cart, setCart] = React.useState([]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };
  return (
    <>
    {/* <div className='flex justify-between bg-black fixed w-screen text-white p-2'>
      <div></div>
      <div className='flex justify-between text-2xl space-x-4'>
      <a href="#">HOME</a>
      <a href="#">STORE</a>
      <a href="#">ABOUT</a>
      </div>
      <div>
        <a href="#Cart">
          <button>Cart</button>
          <span>0</span>
        </a>
      </div>
    </div>
    <div className='bg-gray-600 text-5xl w-full absolute  h-48 text-center top-12 mt-1'>
      <h1 className=' text-white'>The Generics</h1>
    </div> */}
    <header className="bg-black text-white p-4 fixed top-0 w-full flex justify-between items-center z-10">
        <h1 className="text-2xl">The Generics</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="#store" className="hover:underline">Store</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><button className="relative bg-blue-500 px-4 py-2 rounded" onClick={() => alert("Cart clicked!")}>Cart ({props.cart.length})</button></li>
          </ul>
        </nav>
      </header>
      
    </>
  )
}
