// the app main router
import {Switch, Route} from 'react-router-dom'
import Home from './components/main/home/Home'
import Category from './components/main/categories/Category'
import ItemDetails from './components/main/home/itemList/ItemDetails'
import Cart from './components/main/cart/Cart'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/carrito'} component={Cart}/>
            <Route path={'/quiz'}>
                <div><p>Acá habrá un quiz para que el usuario encuentre su cepa ideal</p></div>
            </Route>
            <Route path={'/contacto'}>
                <div><p>LLAME YA</p></div>
            </Route>
            <Route path={'/categoria/:categoryName'} component={Category}/>
            <Route path={'/articulo/:itemId'} component={ItemDetails}/>
        </Switch>
    )
}

export default Router