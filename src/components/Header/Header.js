import {Link} from 'react-router-dom'

// header of the app, contains the navbar
const Header = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link to={'/'} className='navbar-brand'>What if...? Grow-shop</Link>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link to={'/carrito'} className='nav-link'>Carrito</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categorías
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link to={'/categoria/sativa'} className="dropdown-item">Sativa</Link></li>
                  <li><Link to={'/categoria/indica'} className="dropdown-item">Indica</Link></li>
                  <li><Link to={'/categoria/jardineria'} className="dropdown-item">Jardineria</Link></li>
                  <li><Link to={'/categoria/fumadores'} className="dropdown-item">Fumadores</Link></li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link to={'/quiz'} className='nav-link'>Quiz</Link>
              </li>
              <li className='nav-item'>
                <Link to={'/contacto'} className='nav-link'>Contacto</Link>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

export default Header