import { createContext, useContext } from "react";

const ContextStore = createContext({
    cartItem:[
        
    ],
    addCartItem:(item)=>{},
    deleteCartItem:(id)=>{}
})
export const useCartContext=()=>{
    return useContext(ContextStore)
}
export const CartContextProvider = ContextStore.Provider