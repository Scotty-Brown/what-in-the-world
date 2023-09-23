import PreviewCard from '../Home/PreviewCard'
import './AllCountriesContainer.css'

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