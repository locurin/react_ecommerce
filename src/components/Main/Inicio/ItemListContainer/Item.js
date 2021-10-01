// a item on sale
const Item = () => {
    return (
        <article>
            <h3>Remera chula</h3>
            <ul>
                <li>Descripción: remera de verano</li>
                <li>precio: $500</li>
                <li>stock: 5</li>
            </ul>
            <button className="btn btn-primary">Comprar</button>
        </article>
    );
}
export default Item;