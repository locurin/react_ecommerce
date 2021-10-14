import {Link} from 'react-router-dom'
import { useContext } from "react"
import { CartContext } from '../../../../context/CartContext'

// populates and displays items on sale
const Item = props => {

    const [cart, setCart] = useContext(CartContext)
    
    const addToCart = (item) => {
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

    return props.data.map((item, index) => (
        <article key={index}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <button className='btn btn-primary'><Link to={`/articulo/${item.id}`}>Ver detalles</Link></button>
            <button className='btn btn-success' onClick={() => addToCart(item)}>Agregar al carrito</button>
        </article>
        )
    )
}
export default Item
