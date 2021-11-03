import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = (props) => {

    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart] = useContext(CartContext)
    const numbers = {
        price: Number(props.item.price),
        quantity: Number(props.item.quantity),
        total: Number(props.item.price * props.item.quantity)
    }
    const [digits, setDigits] = useState(numbers)

    const updateQuantity = operator => {
        if (operator === "+") {
            setDigits({
                ...digits,
                quantity: digits.quantity + 1,
                total: digits.price * (digits.quantity + 1)
            })
        } 
        else {
            setDigits({
                ...digits,
                quantity: digits.quantity - 1,
                total: digits.price * (digits.quantity - 1)
            })
        }
    }


    return (
        <ul key={props.index}>
            <li>id: {props.item.id}</li>
            <li>nombre: {props.item.name}</li>
            <li>categoria: {props.item.category}</li>
            <li>precio unitario: ${digits.price}</li>
            <li>descripcion: {props.item.description}</li>
            <li>Cantidad a comprar: {digits.quantity}</li>
            <li>Precio final: ${digits.total}</li>
            <button className="btn btn-danger" onClick={() => updateQuantity('-')}>-</button>
            <button className="btn btn-primary" onClick={() => removeFromCart(props.index, props.items)}>Quitar</button>
            <button className="btn btn-success" onClick={() => updateQuantity('+')}>+</button>
        </ul>
    )
}

export default CartItem