import { Link } from 'react-router-dom'
import './PreviewCard.css'

function PreviewCard({name, flag, id, alt}) {
    return (
        <Link to={`/${id}`} className='preview-card-link'>
            <div id={id} className="preview-card">
                <img alt={alt}  src={flag}></img>
                <p className='preview-card-name'>{name}</p>
            </div>
        </Link>
    )
}

export default PreviewCard