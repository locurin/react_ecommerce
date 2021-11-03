import { createContext, useState } from "react"

// declare the cart context
export const CartContext = createContext()

// declare the cart context provider
export const CartProvider = (props) => {

    // handle the cart API state
    const [cart, setCart] = useState([])

    // handle the cart UI state
    const [items, setItems] = useState(cart)

    // check if a product is already in the cart
    const isInCart = id => {
        return cart.find(product => product.id === id) ? true : false
    }

    // add item to cart
    const addToCart = (quantity, item) => {
        const product = populateProduct(item, quantity)
        const newCart = cart
        if (!isInCart(product.id)) {
            newCart.push(product)
            setCart(newCart)
        }
    }

    // populate product object
    const populateProduct = (item, quantity) => {
        const product = {
            id: item.id,
            name: item.name,
            category: item.category,
            quantity: quantity,
            price: item.price,
            subtotal: item.price * quantity,
            description: item.description
        }
        return product
    }
    
    // remove a product from the cart
     const removeFromCart = (index, items) => {
        let newCart = cart
        newCart.splice(index, 1)
        setCart(newCart)
        const newItemsList = items.filter(item => item.key !== index)
        setItems(newItemsList)
    }

    return( 
        <CartContext.Provider value = {[cart, setCart, items, setItems, isInCart, addToCart, removeFromCart]}>
            {props.children}
        </CartContext.Provider>
    )
}

