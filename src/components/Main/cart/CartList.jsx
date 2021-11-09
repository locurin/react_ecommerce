import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"
import CartItem from "./CartItem"

const CartList = () => {

    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart] = useContext(CartContext)

    // if the cart is empty, display a message, else display the cart view
    if (items.length === 0) {
        return <div>NADA QUE MOSTRAR</div>
    } else {
        return (items.map((item, index) => {
            return (
                <CartItem items={items} item={item} index={index}/>
            )
        }))
    }
}

export default CartList
