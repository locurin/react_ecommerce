import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = (props) => {
    
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }
    

    return( 
        <CartContext.Provider value = {[cart, setCart, isInCart]}>
            {props.children}
        </CartContext.Provider>
    )
}