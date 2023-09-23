import { useEffect, useState } from 'react'
import { fetchCountryDetails, fetchBorderCountryNames } from '../apiCalls'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './SingleCountry.css'

function SingleCountry() {
    const [countryData, setCountryData] = useState({})
    const [borderCountries, setBorderCountries] = useState([])
    const [nativeLanguageCode, setNativeLanguageCode] = useState('')
    const [currencyCode, setCurrencyCode] = useState('')
    const { id } = useParams()

    useEffect(() => {
        fetchCountryDetails(id)
            .then(data => {
                setCountryData(data[0])
                getNativeLanguageCode(data[0])
                getCurrencyCode(data[0])

                const borderString = data[0]?.borders?.join(',')
                if (borderString) {
                    fetchBorderCountryNames(borderString)
                        .then(data => {
                            getBorderCountryNames(data)
                        })
                        .catch(error => console.log(error))
                    }
                    
                })
                .catch(error => console.log(error))
            }, [id])
            
    function getBorderCountryNames(data) {
        const borderCountryCodes = data.map(country => country.name.common)
        const borderCountryNames = borderCountryCodes.join(', ')
        setBorderCountries(borderCountryNames)
    }

    function getNativeLanguageCode(data) {
        const languageCode = Object.keys(data.name.nativeName)[0]
        setNativeLanguageCode(languageCode)
    }

    function getCurrencyCode(data) {
        const code = Object.keys(data.currencies)[0]
        setCurrencyCode(code)
    }

    return (
        <div className='country-details-container'>
            {countryData && borderCountries && nativeLanguageCode && currencyCode && (
                <>
                    <div className='graphics-container'>
                        <p className='graphic-title'>{countryData.name?.common} Flag</p>
                        <img alt={countryData.flags?.alt} src={countryData.flags?.png}></img>
                        {countryData.coatOfArms?.png ? 
                        <>
                        <p className='graphic-title'>{countryData.name?.common} Coat of Arms</p>
                        <img alt={countryData.coatOfArms?.alt} src={countryData.coatOfArms?.png}></img>
                        </> : null}
                    </div>
                    <div className='data-style-div'>
                        <div className='main-data-container'>
                            <p className='data-details'>Common Name: {countryData.name?.common}</p>
                            <p className='data-details'>Native Name: {countryData.name?.nativeName[nativeLanguageCode]?.official}</p>
                            <p className='data-details'>Capital: {countryData.capital}</p>
                            <p className='data-details'>Common Language Spoken: {countryData.languages[nativeLanguageCode]}</p>
                            <p className='data-details'>Population: {countryData.population}</p>
                            <p className='data-details'>Currencies: {countryData.currencies[currencyCode]?.name}</p>
                            <p className='data-details'>Cars drive on the {countryData.car?.side} side of the road.</p>
                        </div>
                        <div className='graphical-data-container'>
                            <p className='data-details'>Region: {countryData.region}</p>
                            <p className='data-details'>Subregion: {countryData.subregion}</p>
                            <p className='data-details'>Continent: {countryData.continents}</p>
                            {borderCountries.length > 1 ? <p className='data-details'>Border Countries: {borderCountries} </p> : <p className='data-details'>No Bordering Countries</p>}
                            <Link className='google-map-link' to={countryData.maps?.googleMaps} target='_blank' rel='noopener noreferrer'>
                                View Location in Google Maps
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleCountry
