import {BrowserRouter} from 'react-router-dom'
import Header from './components/header/Header'
import Router from './Router'
import Footer from './components/footer/Footer'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header/>
        <Router/>
        <Footer/>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
