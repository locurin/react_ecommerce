import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = (props) => {

    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart] = useContext(CartContext)

    return (
        <ul key={props.index}>
            <li>id: {props.item.id}</li>
            <li>nombre: {props.item.name}</li>
            <li>categoria: {props.item.category}</li>
            <li>precio unitario: ${props.item.price}</li>
            <li>descripcion: {props.item.description}</li>
            <li>Cantidad a comprar: {props.item.quantity}</li>
            <li>Precio final: ${props.item.price * props.item.quantity}</li>
            <button className="btn btn-danger" onClick={() => removeFromCart(props.index, props.items)}>Quitar</button>
        </ul>
    )
}

export default CartItem