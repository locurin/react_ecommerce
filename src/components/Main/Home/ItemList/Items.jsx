import {Link} from 'react-router-dom'

// populates and displays items on sale
const Items = props => {
    return props.data.map((item, index) => (
        <article key={index}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <button className='btn btn-primary'><Link to={`/articulo/${item.id}`}>Ver detalles</Link></button>
        </article>
        )
    )
}
export default Items
