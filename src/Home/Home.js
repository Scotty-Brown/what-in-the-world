import Hero from './Hero'
import Highlight from './Highlight'
import Preview from './Preview'

function Home ({homePreview}) {


    return (
        <div className="home-container">
            <Hero/>
            <Highlight />
            <Preview homePreview={homePreview} />
        </div>
    )

}

export default Home