import Item from "../ItemListContainer/Item"
import ReactDelayRender from 'react-delay-render'

// contains the main list of elements on sale
const ItemList = () => {
    return (
        <section>
            <Item/>
        </section>
    )
}

export default ReactDelayRender({ delay: 3000 })(ItemList);