import './Header.css'
import { NavLink } from 'react-router-dom'

function Header() {

    return (
        <header className="header">
            <h1 className="page-title" >What in the world...</h1>
            <NavLink className='navlink'>All Countries</NavLink>
            <NavLink className='navlink'>Favorite Countries</NavLink>  
        </header>
    )
}

export default Header