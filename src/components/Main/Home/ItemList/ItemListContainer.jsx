import Item from './Item'
import DateAndFilters from './DateAndFilters'
import ReactDelayRender from 'react-delay-render'
import TempDatabase from '../../../../database/TempDatabase'


// contains the main list of elements on sale
const ItemListContainer = () => {
    return (
        <>
            <DateAndFilters/>
            <Item data={TempDatabase()}/>
        </>
    )
}

export default ReactDelayRender({ delay: 3000 })(ItemListContainer)