import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    return (
        <div>
            {cart.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>{item.id}</li>
                        <li>{item.name}</li>
                        <li>{item.category}</li>
                        <li>${item.price}</li>
                        <li>{item.description}</li>
                    </ul>
                )
                })
            }
        </div>
    )
}

export default Cart