import { Link } from 'react-router-dom'
import './Highlight.css'    
import HighlightImage from './highlightImg.jpg'

function Highlight () {


        return (
            <div className="highlight-container">
                {/* <h3>Highlight</h3> */}
                <img src={HighlightImage}></img>
                <div className='location-link'>
                    <h2 className='highlight-location'>📍Lisbonne, Portugal</h2>
                <Link className='learn-more'>Learn More About Portugal</Link>
                </div>
            </div>
        )
}

export default Highlight