import { useContext } from "react"
import { CartContext } from "../../../context/CartContext"

const Cart = () => {
    const [cart, setCart] = useContext(CartContext)
    return (
        <div>
            {cart.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>id: {item.id}</li>
                        <li>nombre: {item.name}</li>
                        <li>categoria: {item.category}</li>
                        <li>precio unitario: ${item.price}</li>
                        <li>descripcion: {item.description}</li>
                        <li>Cantidad a comprar: {index}</li>
                    </ul>
                )
                })
            }
        </div>
    )
}

export default Cart