import Item from './Item'
import DateAndFilters from './DateAndFilters'
import ReactDelayRender from 'react-delay-render'

// contains the main list of elements on sale
const ItemListContainer = () => {
    return (
        <section>
            <DateAndFilters/>
            <Item/>
        </section>
    )
}

export default ReactDelayRender({ delay: 3000 })(ItemListContainer)