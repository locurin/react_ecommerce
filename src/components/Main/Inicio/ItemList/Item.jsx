// a item on sale

const Item = () => {
    const data = ['Descripción: remera de verano', 'precio: $500', 'stock: 5']
    return (
        <article>
            <h3>Remera chula</h3>
            <ul>
                {data.map(itemDataLine => <li key={itemDataLine}>{itemDataLine}</li>)}
            </ul>
            <button className='btn btn-primary'>Ver detalles</button>
            <button className='btn btn-success'>Comprar</button>
        </article>
    )
}
export default Item