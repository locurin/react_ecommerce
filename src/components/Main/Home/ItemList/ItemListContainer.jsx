import Items from './Items'
import DateAndFilters from './DateAndFilters'
import ReactDelayRender from 'react-delay-render'
import TempDatabase from '../../../../database/TempDatabase'


// contains the main list of elements on sale
const ItemListContainer = () => {
    return (
        <>
            <DateAndFilters/>
            <Items data={TempDatabase()}/>
        </>
    )
}

export default ReactDelayRender({ delay: 500 })(ItemListContainer)