import { createContext, useState } from "react"

// declare the cart context
export const CartContext = createContext()

// declare the cart context provider
export const CartProvider = (props) => {

    // handle the cart state
    const [cart, setCart] = useState([])

    // check if a product is already in the cart
    const isInCart = id => {
        return cart.find(product => product.id === id) ? true : false
    }
    
    // remove a product from the cart
    const removeFromCart = index => {
        let newCart = cart
        newCart.splice(index, 1)
        setCart(newCart)
    }

    return( 
        <CartContext.Provider value = {[cart, setCart, isInCart, removeFromCart]}>
            {props.children}
        </CartContext.Provider>
    )
}