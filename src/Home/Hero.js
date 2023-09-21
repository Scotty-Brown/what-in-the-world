import './Hero.css'

function Hero () {
    return (
        <div className="hero-container">
            <div className='verbs'>
            <h2 className='one'>Explore with us...</h2>
            <h2 className='two'>Discover</h2>
            <h2 className='three'>Learn</h2>
            <h2 className='four'>Grow</h2>
            </div>
            <div className='statement-globe'>
            <div className='globe'>🌎</div>
            <p className='statement'>Exploring countries through their flags, currencies, languages, and more, drawing you closer to the global community, one piece of information at a time.</p>
            </div>
        </div>
    )
    
}

export default Hero

