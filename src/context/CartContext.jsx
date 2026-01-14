import { createContext, useContext, useState } from "react";

const cartContext=createContext();

export function CartProvider({children}){
    const [cart, setCart]= useState([])

    function addToCart(prod){
        setCart((prev)=>{
           const existing= prev.find((item)=>item.id===prod.id)
           if(existing){
                const newCart= prev.map((item)=>{
                    if(item.id===prod.id) return {...item, quantity: item.quantity +1 }
                    return item
                })
                return newCart
           }
          
           return newCart
        })
    }

    function reduceFromCart(prod){
        setCart((prev)=>{
        const existing= prev.find((item)=>item.id===prod.id)
           if(existing){
            
                const newCart= prev.map((item)=>{
                    if(item.id===prod.id) return {...item, quantity: item.quantity -1 }
                    return item
                })
           }
           return newCart
        })
    }

    const totalPrice=cart.reduce((acc, curr)=> acc+ curr.price * curr.quantity, 0)

    return (
        <cartContext.Provider value={{cart, addToCart, reduceFromCart, totalPrice}}>{children}</cartContext.Provider>
    )
}