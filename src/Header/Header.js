import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <header className="header">
            <h1 className="page-title" >What in the world...</h1>
            <div className='header-nav'>
            <NavLink to={'/'} className='navlink' >Home</NavLink>
            <NavLink to={'/allCountries'} className='navlink' >All Countries</NavLink>
            </div>  
        </header>
    )
}

export default Header