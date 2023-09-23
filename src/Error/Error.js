import './Error.css'
import { Link } from 'react-router-dom'

function ErrorCard() {
    return (
        <div className='error-card'>
            <h2 className='error-title'>Oops, something went wrong</h2>
            <p className='error-action'>Please return home or try again later</p>
            <Link className='return-home-btn' to='/'>Return Home</Link>
        </div>
    )
}

export default ErrorCard