// displays details of an item
import { useParams } from "react-router"
import TempDatabase from "../../../../database/TempDatabase"



const ItemDetails = () => {
    const {itemId} = useParams()
    const item = TempDatabase().find(item => item.id === Number(itemId))
    return (
        <article key={item.id}>
            <h3>{`Artículo #${item.id} - ${item.name}`}</h3>
            <ul>
                <li>{`Precio: $${item.price}`}</li>
                <li>{`Categoria: ${item.category}`}</li>
                <li>{`Descripción: ${item.description}`}</li>
            </ul>
            <button className='btn btn-success'>Comprar</button>
        </article>
    )
}

export default ItemDetails