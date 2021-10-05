// details of an item

const ItemDetails = ({data}) => {
    return (
        <section>
            <h3>Remera chula</h3>
            <img src='./media/images/jimmy.jpg' alt='remera fachera vestida por el Jimmy de la pipol'/>
            <ul>
                {data.map(itemDataLine => <li>{itemDataLine}</li>)}
            </ul>
            <button className='btn btn-success'>Comprar</button>
        </section>
    )
}

export default ItemDetails