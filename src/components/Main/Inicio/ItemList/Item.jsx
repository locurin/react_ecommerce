// a item on sale

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
            <button className='btn btn-primary'>Ver detalles</button>
            <button className='btn btn-success'>Comprar</button>
        </article>
        )
    )
}
export default Item
