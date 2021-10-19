import { createContext, useState } from "react"

export const CartContext = createContext()

export const CartProvider = (props) => {

    
    const [cart, setCart] = useState([])

    const isInCart = (id) => {
        return cart.find(product => product.id === id) ? true : false
    }
    
    const removeFromCart = (id) => {
        let temp = cart
        const productIndex = cart.findIndex(product => product.id === id)
        temp = temp.splice(productIndex, 1)
        setCart(temp)
    }

    return( 
        <CartContext.Provider value = {[cart, setCart, isInCart, removeFromCart]}>
            {props.children}
        </CartContext.Provider>
    )
}