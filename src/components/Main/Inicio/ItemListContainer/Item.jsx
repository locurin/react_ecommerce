// a item on sale
import ItemDetails from './ItemDetails/ItemDetails'
const Item = () => {
    const itemData = ['Descripción: remera de verano', 'precio: $500', 'stock: 5']
    
    return (
        <article>
            <h3>Remera chula</h3>
            <ul>
                {itemData.map(itemDataLine => <li>{itemDataLine}</li>)}
            </ul>
            <button className='btn btn-primary'>Ver detalles</button>
            <button className='btn btn-success'>Comprar</button>
        </article>
    )
}
export default Item