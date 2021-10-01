import Item from "../ItemListContainer/Item"

// contains the main list of elements on sale
const ItemList = () => {
    setTimeout(() => returnItem(), 3000) 
}

function returnItem() {
    return (
        <section>
            <Item/>
        </section>
    );
}

export default ItemList