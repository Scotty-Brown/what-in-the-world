import './Hero.css'

function Hero () {
    return (
        <div className="hero-container">
            <div className='hero-verbs'>
                <h2 className='hero-title'>Explore with us...</h2>
                <h2 className='discover'>Discover 📖</h2>
                <h2 className='learn'>Learn 💡</h2>
                <h2 className='grow'>Grow 🪴</h2>
            </div>
            <div className='hero-statement-globe'>
                <p className='hero-globe'>🌎</p>
                <p className='hero-statement'>Exploring countries through their flags, currencies, languages, and more, drawing you closer to the global community, one piece of information at a time.</p>
            </div>
        </div>
    )
    
}

export default Hero

