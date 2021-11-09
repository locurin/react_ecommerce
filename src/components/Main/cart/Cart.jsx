import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"
import CartList from "./CartList"
import CartItem from "./CartItem"
import CartConsole from "./CartSubtotal"

// Displays the cart view of the application
const Cart = () => {
    
    return (
        <section>
            <CartList />
            <CartConsole />
        </section>
    )
    
}

export default Cart