import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

// Displays the cart view of the application
const Cart = () => {
    const [cart, setCart, isInCart, removeFromCart] = useContext(CartContext)
    const [items, setItems] = useState(cart)

    // Updates the cart when an item is removed
    const removeItem = (index) => {
        removeFromCart(index)
        const newItemsList = items.filter(item => item.key !== index)
        setItems(newItemsList)
    }

    // if the cart is empty, display a message, else display the cart view
    if (items.length === 0) {
        return <div>NADA QUE MOSTRAR</div>
    } else {
        return (items.map((item, index) => {
            return (
                <ul key={index}>
                    <li>id: {item.id}</li>
                    <li>nombre: {item.name}</li>
                    <li>categoria: {item.category}</li>
                    <li>precio unitario: ${item.price}</li>
                    <li>descripcion: {item.description}</li>
                    <li>Cantidad a comprar: {item.quantity}</li>
                    <button className="btn btn-danger" onClick={() => removeItem(index)}>Quitar</button>
                </ul>
            )
        }))
    }
}

export default Cart