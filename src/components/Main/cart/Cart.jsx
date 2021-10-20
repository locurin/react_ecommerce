import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {
    const [cart, setCart, isInCart, removeFromCart] = useContext(CartContext)
    if (cart === null) {
        return <div>NADA QUE MOSTRAR</div>
    } else {
        return (cart && cart.map((item, index) => {
            return (
                <ul key={index}>
                    <li>id: {item.id}</li>
                    <li>nombre: {item.name}</li>
                    <li>categoria: {item.category}</li>
                    <li>precio unitario: ${item.price}</li>
                    <li>descripcion: {item.description}</li>
                    <li>Cantidad a comprar: {item.quantity}</li>
                    <button className="btn btn-danger" onClick={() => removeFromCart(index)}>Quitar</button>
                </ul>
            )
        }))
    }
}

export default Cart