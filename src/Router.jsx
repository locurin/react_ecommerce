// the app main router
import {Switch, Route} from 'react-router-dom'
import Home from './components/Main/Home/Home'
import Category from './components/Main/Categories/Category'
import ItemDetails from './components/Main/Home/ItemList/ItemDetails'

const Router = () => {
    return (
        <Switch>
            <Route exact path={'/'}>
                <Home/>
            </Route>
            <Route path={'/carrito'}>
                <div><p>Acá va a estar el carrito de compras</p></div>
            </Route>
            <Route path={'/quiz'}>
                <div><p>Acá habrá un quiz para que el usuario encuentre su cepa ideal</p></div>
            </Route>
            <Route path={'/contacto'}>
                <div><p>LLAME YA</p></div>
            </Route>
            <Route path={'/categoria/:categoryName'}>
                <Category/>
            </Route>
            <Route path={'/articulo/:itemId'}>
                <ItemDetails/>
            </Route>
        </Switch>
    )
}

export default Router