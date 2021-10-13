import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Main/Inicio/Home'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path={'/'}>
          <Home/>
        </Route>
        <Route path={'/carrito'}>
          <div><p>FOOOOO</p></div>
        </Route>
        <Route path={'/quiz'}>
          <div><p>aeeeea soy sabalero</p></div>
        </Route>
        <Route path={'/contacto'}>
          <div><p>LLAME YA</p></div>
        </Route>
        <Route path={`/category`}>
          <div><p>CATEGORIA</p></div>
        </Route>
        <Route path={`/item`}>
          <div><p>ITEM</p></div>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
