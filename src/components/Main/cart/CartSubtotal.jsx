import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

// render cart subtotal (sum of all items in cart)
const CartConsole = () => {
  
    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart, subtotal, setSubtotal, emptyCart, thankUAlert] = useContext(CartContext)

    return (
        <section>
            <ul>
                <p>{`ESTÁS COMPRANDO ${subtotal.items} item(s) de ${subtotal.products} producto(s)`}</p>
                <p>{`A PAGAR: $${subtotal.price}`}</p>
            </ul>
            <button className="btn btn-success" onClick={() => thankUAlert()}>Comprar</button>
            <button className="btn btn-danger" onClick={() => emptyCart()}>Vaciar Carro</button>
        </section>
    )
}


export default CartConsole