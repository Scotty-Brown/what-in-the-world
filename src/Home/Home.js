import Hero from './Hero'

function Home () {

    // function Hero () {
    //     return (
    //         <div className="hero-container">
    //             <p>Explore with us...</p>
    //             <h2>hero</h2>
    //             <p>Exploring countries through their flags, currencies, languages, and more, drawing you closer to the global community, one piece of information at a time.</p>
    //         </div>
    //     )
    // }

    // function Highlight () {
    //     return (
    //         <div className="highlight-container">
    //             <h3>Highlight</h3>
    //             <p>lakjsd;lfkja;lskdjl;aksjdf</p>
    //         </div>
    //     )
    // }


    return (
        <div className="home-container">
            <Hero/>
            {/* <Highlight/> */}
        </div>
    )

}

export default Home