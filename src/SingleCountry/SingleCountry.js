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
        if(data.name.nativeName) {
            const languageCode = Object.keys(data.name.nativeName)[0]
            setNativeLanguageCode(languageCode)
        } 
    }

    function getCurrencyCode(data) {
        if(data.currencies) {
            const code = Object.keys(data.currencies)[0]
            setCurrencyCode(code)
        } 
    }

    

    return (
        <div className='country-details-container'>
        {countryData && borderCountries && (
            <>
                <div className='graphics-container'>
                    <p className='graphic-title'>{countryData.name?.common} Flag</p>
                    <img alt={countryData.flags?.alt} src={countryData.flags?.png}></img>
                    {countryData.coatOfArms?.png && (
                        <>
                            <p className='graphic-title'>{countryData.name?.common} Coat of Arms</p>
                            <img alt={countryData.coatOfArms?.alt} src={countryData.coatOfArms?.png}></img>
                        </>
                    )}
                </div>
                <div className='data-style-div'>
                    <div className='main-data-container'>
                        <p className='data-details'>Common Name: {countryData.name?.common || 'No Data Available'}</p>
                        <p className='data-details'>Native Name: {countryData.name?.nativeName?.[nativeLanguageCode]?.official || 'No Data Available'}</p>
                        <p className='data-details'>Capital: {countryData.capital || 'No Data Available'}</p>
                        <p className='data-details'>Common Language Spoken: {countryData.languages?.[nativeLanguageCode] || 'No Data Available'}</p>
                        <p className='data-details'>Population: {countryData.population || 'No Data Available'}</p>
                        <p className='data-details'>Currencies: {countryData.currencies?.[currencyCode]?.name || 'No Data Available'}</p>
                        <p className='data-details'>Cars drive on the {countryData.car?.side || 'No Data Available'} side of the road.</p>
                    </div>
                    <div className='graphical-data-container'>
                        <p className='data-details'>Region: {countryData.region || 'No Data Available'}</p>
                        <p className='data-details'>Subregion: {countryData.subregion || 'No Data Available'}</p>
                        <p className='data-details'>Continent: {countryData.continents || 'No Data Available'}</p>
                        {borderCountries.length > 1 ? (
                            <p className='data-details'>Border Countries: {borderCountries} </p>
                        ) : (
                            <p className='data-details'>No Bordering Countries</p>
                        )}
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
