import Hero from './Hero'
import Highlight from './Highlight'
import Preview from './Preview'
import PropTypes from 'prop-types'

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

Home.propTypes = {
    homePreview: PropTypes.arrayOf(
      PropTypes.shape({
        ccn3: PropTypes.string.isRequired,
        flags: PropTypes.shape({
          alt: PropTypes.string.isRequired
        }).isRequired,
        name: PropTypes.shape({
          common: PropTypes.string.isRequired,
          nativeName: PropTypes.shape({
            official: PropTypes.string
          }),
          official: PropTypes.string.isRequired
        })
      })
    ).isRequired
  }