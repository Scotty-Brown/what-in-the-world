import PreviewCard from '../Home/PreviewCard'
import './AllCountriesContainer.css'
import PropTypes from 'prop-types'

function AllCountries({countriesSimple}) {
    const allCountriesContainer = countriesSimple && countriesSimple.map(country => {
        return (
            <PreviewCard
                    key={country.ccn3}
                    name={country.name.common}
                    flag={country.flags.png}
                    id={country.ccn3}
                    alt={country.flags.alt}
                />
                )
            })
            
    return (
        <div className='all-countries-container'>{allCountriesContainer}</div>

    )

    }

export default AllCountries

AllCountries.propTypes = {
    countriesSimple: PropTypes.arrayOf(
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