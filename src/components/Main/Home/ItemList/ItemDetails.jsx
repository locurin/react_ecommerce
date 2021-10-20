// displays details of an item
import { useContext } from 'react'
import { useParams } from 'react-router'
import { CartContext } from '../../../../context/CartContext'
import TempDatabase from '../../../../database/TempDatabase'

const ItemDetails = () => {
    
    const {itemId} = useParams()
    const item = TempDatabase().find(item => item.id === Number(itemId))

    const [cart, setCart, isInCart, removeFromCart] = useContext(CartContext)
    
    const addToCart = () => {
        console.table(cart)
        const quantity = Number(document.querySelector('#cantidadItems').value)
        const product = {
            id: item.id,
            name: item.name,
            category: item.category,
            quantity: quantity,
            price: item.price,
            subtotal: item.price * quantity,
            description: item.description
        }
        const tempList = cart
        if (!isInCart(product.id)) {
            tempList.push(product)
            setCart(tempList)
        }
    }
    
    return (
        <article key={item.id}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <form>
                <input id='cantidadItems' type='number' placeholder='Cantidad a comprar' required/>
            </form>
            <button className='btn btn-success' onClick={addToCart}>Agregar al carrito</button>
            <button className='btn btn-danger' onClick={() => removeFromCart(1)}>Quitar</button>
        </article>
    )
}

export default ItemDetails