// import { createContext, useContext } from "react";

// const ContextStore = createContext({
//     islogged:false,
//     token:null,
//     cartItem:[],
//     addCartItem:(item)=>{},
//     deleteCartItem:(id)=>{},
//     login:(token)=>{},
//     logout:()=>{}
// })
// export const useCartContext=()=>{
//     return useContext(ContextStore)
// }
// export const CartContextProvider = ContextStore.Provider
import { createContext, useContext, useState } from 'react';

const CartContext = createContext(
    {
            islogged:false,
            token:null,
            cartItem:[],
            addCartItem:(item)=>{},
            deleteCartItem:(id)=>{},
            login:(token)=>{},
            logout:()=>{}
        }

);

export const CartContextProvider = ({ children }) => {
    const initalToken=localStorage.getItem("token")
  const [cartItem, setCartItem] = useState([]);
  const [token, setToken] = useState(initalToken);

  const addCartItem = (product) => {
    setCartItem((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      return existingItem
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const deleteCartItem = (id) => {
    setCartItem(cartItem.filter((item) => item.id !== id));
  };

  const login = (tokenn) => {
    localStorage.setItem("token", tokenn);
    console.log(tokenn);
    
    setToken(tokenn)};
  const logout = () => setToken(null);
  const islogged = !!token;

  return (
    <CartContext.Provider value={{ cartItem, addCartItem, deleteCartItem, login, logout, token, islogged }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartContextProvider");
  }
  return context;
};
