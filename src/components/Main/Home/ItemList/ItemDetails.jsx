import { useContext } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../../../../context/CartContext'
import TempDatabase from '../../../../database/TempDatabase'

// display details of a specific item
const ItemDetails = () => {
    
    // hooks and context
    const {itemId} = useParams()
    const item = TempDatabase().find(item => item.id === Number(itemId))
    const [cart, setCart, items, setItems, isInCart, addToCart, removeFromCart] = useContext(CartContext)
    
    return (
        <article id={item.id}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <form>
                <input id='cantidadItems' type='number' placeholder='Cantidad a comprar' required/>
            </form>
            <button className='btn btn-success' onClick={() => addToCart(document.getElementById('cantidadItems').value, item)}>Agregar al carrito</button>
            <button className='btn btn-danger' onClick={() => removeFromCart(1)}>Quitar</button>
        </article>
    )
}

export default ItemDetails