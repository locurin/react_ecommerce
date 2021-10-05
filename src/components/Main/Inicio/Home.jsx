// Main component for Homepage
import ItemListContainer from './ItemListContainer/ItemList'
import Banner from './Banner/Banner'

const Home = () => {
    return (
        <main>
            <Banner/>
            <ItemListContainer/>
        </main>
    );
}

export default Home