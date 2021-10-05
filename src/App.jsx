import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Main/Inicio/Home'


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route exact path='/nosotros'>
          <div><p>FOOOOO</p></div>
        </Route>
        <Route exact path='/showroom'>
          <div><p>aeeeea soy sabalero</p></div>
        </Route>
        <Route exact path='/contacto'>
          <div><p>LLAME YA</p></div>
        </Route>
      </Switch>
      <footer>FOOTER LOW-COST</footer>
    </BrowserRouter>
  )
}

export default App
