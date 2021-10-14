// displays details of an item
import { useContext } from "react"
import { useParams } from "react-router"
import { CartContext } from "../../../../context/CartContext"
import TempDatabase from "../../../../database/TempDatabase"

const ItemDetails = () => {
    
    const {itemId} = useParams()
    const item = TempDatabase().find(item => item.id === Number(itemId))

    const [cart, setCart] = useContext(CartContext)
    
    const addToCart = () => {
        const product = {
            id: item.id,
            name: item.name,
            category: item.category,
            price: item.price,
            description: item.description
        }
        const temp = cart
        temp.push(product)
        setCart(temp)
    }
    
    return (
        <article key={item.id}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <button className='btn btn-success' onClick={addToCart}>Agregar al carrito</button>
        </article>
    )
}

export default ItemDetails