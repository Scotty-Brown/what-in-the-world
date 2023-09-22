import { Link } from 'react-router-dom'
import './Highlight.css'    
import HighlightImage from './highlightImg.jpg'

function Highlight () {


        return (
            <div className="highlight-container">
                <img src={HighlightImage}></img>
                <div className='location-link'>
                    <h2 className='highlight-location'>📍Lisbon, Portugal</h2>
                <Link to={'/620'} className='learn-more'>Learn More About Portugal!</Link>
                </div>
            </div>
        )
}

export default Highlight