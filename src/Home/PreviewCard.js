import { Link } from 'react-router-dom'
import './PreviewCard.css'
import PropTypes from 'prop-types'

function PreviewCard({name, flag, id, alt}) {
    return (
        <Link to={`/${id}`} className='preview-card-link'>
            <div id={id} className="preview-card">
                <img className='preview-image' alt={alt}  src={flag}></img>
                <p className='preview-card-name'>{name}</p>
            </div>
        </Link>
    )
}

export default PreviewCard

PreviewCard.propTypes = {
    name: PropTypes.string,
    flag: PropTypes.string,
    id: PropTypes.string,
    alt: PropTypes.string,
  }