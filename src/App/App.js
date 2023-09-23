import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AllCountries from '../AllCountries/AllCountriesContainer';
import SingleCountry from '../SingleCountry/SingleCountry';
import ErrorCard from '../Error/Error';
import Search from '../Search/SearchCountry';
import { useEffect, useState } from 'react';
import { fetchSimple } from '../apiCalls';
import { Route, Routes, useLocation  } from 'react-router-dom';

function App() {
  const [homePreview, setHomePreview] = useState([])
  const [countriesSimple, setCountriesSimple] = useState([])
  const [error, setError] = useState('')
  const location = useLocation().pathname
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    fetchSimple()
    .then(data => {
      setCountriesSimple(data)
      grabPreviewSample(data)
    })
    .catch(err => setError(err.message))
  }, [])

  useEffect(() => {
    setError('')
  }, [location])

  function grabPreviewSample(countryData) {
      const previewData = countryData.slice(0,3)
      setHomePreview(previewData)
  }

  return (
    <div className="App">
      <Header />
        {!error ? 
          <Routes>
            <Route path='/' element={<Home homePreview={homePreview}/>}/>
            <Route path='/allCountries' element={<>
              <Search setSearchInput={setSearchInput}/>
              <AllCountries searchInput={searchInput} countriesSimple={countriesSimple} />
            </>} />
            <Route path='/:id' element={<SingleCountry setError={setError} />} />
            <Route path='*' element={<ErrorCard />} />
          </Routes> 
        : <ErrorCard />} 
    </div>
  );
}

export default App;
