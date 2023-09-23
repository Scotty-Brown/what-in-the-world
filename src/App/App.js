import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AllCountries from '../AllCountries/AllCountriesContainer';
import SingleCountry from '../SingleCountry/SingleCountry';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSimple } from '../apiCalls';
import { Route, Routes  } from 'react-router-dom';

function App() {
  const [homePreview, setHomePreview] = useState([])
  const [countriesSimple, setCountriesSimple] = useState([])

  useEffect(() => {
    fetchSimple()
    .then(data => {
      setCountriesSimple(data)
      grabPreviewSample(data)
    })
    .catch(err => console.log(err))
  }, [])

  function grabPreviewSample(countryData) {
      const previewData = countryData.slice(0,3)
      setHomePreview(previewData)
  }

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/' element={<Home homePreview={homePreview} />}/>
          <Route path='/allCountries' element={<AllCountries countriesSimple={countriesSimple} />} />
          <Route path='/:id' element={<SingleCountry />} />
        </Routes>  
    </div>
  );
}

export default App;
