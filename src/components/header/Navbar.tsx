
import React, { useState } from "react";
import { useCartContext } from "../../store/ContextStore";
import { NavLink } from "react-router";

export default function Navbar() {
  const { cartItem, deleteCartItem } = useCartContext()
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      title: "Colors",
      price: 100,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ]);

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  

  return (
    <>
 
      <header className="flex justify-between bg-black fixed w-full text-white p-4 z-10 top-0">
        <nav className="flex space-x-6 justify-evenly">
          <NavLink to="" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-700"}`}>HOME</NavLink>
          <NavLink to="store" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-700"}`}>STORE</NavLink>
          <NavLink to="about" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-700"}`}>ABOUT</NavLink>
          <NavLink to="apicheck" className={({isActive})=>`${isActive ? "text-orange-700":"text-gray-700"}`}>APICHECK</NavLink>
        </nav>
        <button
          className="border-2 border-gray-300 px-4 py-2 rounded"
          onClick={toggleCart}
        >
          Cart <span>({cartItem.length})</span>
        </button>
      </header>

    
      {cartVisible && (
        <div className="fixed top-16 right-4 bg-white shadow-lg p-4 w-80 rounded-lg h-screen z-10">
          <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>
          {cartItem.length === 0 ? (
            <p className="text-gray-600">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              <button
                    className="text-red-500 hover:text-red-700"
                    onClick={toggleCart}
                  >
                    ❌
                  </button>
              {cartItem.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    <p className="text-gray-600">${item.price} x {item.quantity}</p>
                  </div>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={(e) => deleteCartItem(item.id)}
                  >
                    ❌
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
