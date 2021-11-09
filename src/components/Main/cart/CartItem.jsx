import { useContext, useState } from "react"
import { CartContext } from "../../../context/CartContext"

const CartItem = (props) => {

    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart, subtotal, setSubtotal] = useContext(CartContext)
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
            setSubtotal(
                {price: subtotal.price + digits.price,
                 products: subtotal.products,
                 items: subtotal.items + 1,
                })
        } 
        else {
            if (digits.quantity === 1) {
                removeFromCart(props.index, props.items)
                setSubtotal(
                    {price: subtotal.price - digits.price,
                    products: subtotal.products - 1,
                    items: subtotal.items - 1
                })
            } else {
                setDigits({
                    ...digits,
                    quantity: digits.quantity - 1,
                    total: digits.price * (digits.quantity - 1)
                })
                setSubtotal(
                    {price: subtotal.price - digits.price,
                    products: subtotal.products,
                    items: subtotal.items - 1
                })
            }
        }
        updateCartData(props.item.id)
        
    }
  // find the item with an id equal to itemID and replace it in the cart
  const updateCartData = (itemId) => {
    console.table(digits)
    const newCart = cart
    newCart.forEach(item => {
        if (item.id === itemId) {
            item.quantity = digits.quantity
            item.total = digits.total
        }
    })
    setCart(newCart)
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