import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {
    const [cart, removeFromCart] = useContext(CartContext)
    if (cart === null) {
        return <div>NADA QUE MOSTRAR</div>
    } else {
        return cart.map(item => {
            return (
                <ul key={item.id}>
                    <li>id: {item.id}</li>
                    <li>nombre: {item.name}</li>
                    <li>categoria: {item.category}</li>
                    <li>precio unitario: ${item.price}</li>
                    <li>descripcion: {item.description}</li>
                    <li>Cantidad a comprar: {item.quantity}</li>
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Quitar</button>
                </ul>
            )
        })
    }
}

export default Cart