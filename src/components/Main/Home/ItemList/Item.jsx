import {Link} from 'react-router-dom'

// populates and displays items on sale
const Item = props => {
    console.log(props.data)
    return props.data.map(item => (
        <article key={item.id}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <button className='btn btn-primary'><Link to={`/articulo/${item.id}`}>Ver detalles</Link></button>
            <button className='btn btn-success'>Comprar</button>
        </article>
        )
    )
}
export default Item
