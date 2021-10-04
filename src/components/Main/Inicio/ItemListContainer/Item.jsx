// a item on sale
const Item = () => {
    return (
        <article>
            <h3>Remera chula</h3>
            <ul>
                {["Descripción: remera de verano", "precio: $500", "stock: 5"].map(listItem => <li>{listItem}</li>)}
            </ul>
            <button className="btn btn-primary">Comprar</button>
        </article>
    );
}
export default Item;