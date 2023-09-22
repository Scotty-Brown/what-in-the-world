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
                        <img alt={countryData.flags?.alt} src={countryData.flags?.png}></img>
                        <img alt={countryData.coatOfArms?.alt} src={countryData.coatOfArms?.png}></img>
                    </div>
                    <div className='main-data-container'>
                        <p>Common Name: {countryData.name?.common}</p>
                        <p>Native Name: {countryData.name?.nativeName[nativeLanguageCode]?.official}</p>
                        <p>Capital: {countryData.capital}</p>
                        <p>Common Language Spoken: {countryData.languages[nativeLanguageCode]}</p>
                        <p>Population: {countryData.population}</p>
                        <p>Currencies: {countryData.currencies[currencyCode]?.name}</p>
                        <p>Cars drive on the {countryData.car?.side} side of the road.</p>
                    </div>
                    <div className='graphical-data-container'>
                        <p>Region: {countryData.region}</p>
                        <p>Subregion: {countryData.subregion}</p>
                        <p>Continent: {countryData.continents}</p>
                        <p>Border Countries: {borderCountries} </p>
                        <Link className='google-map' to={countryData.maps?.googleMaps} target='_blank' rel='noopener noreferrer'>
                            View Location in Google Maps
                        </Link>
                    </div>
                </>
            )}
        </div>
    )
}

export default SingleCountry
