// Main component for Homepage
import Banner from './Banner/Banner'
import ItemListContainer from './ItemList/ItemListContainer'
import TempDatabase from '../../../database/TempDatabase' 


const Home = () => {
    console.log(TempDatabase())
    return (
        <main>
            <Banner/>
            <ItemListContainer/>
        </main>
    )
}

export default Home