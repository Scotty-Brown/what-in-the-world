import './App.css';
import Header from '../Header/Header';
import Home from '../Home/Home';
import AllCountries from '../AllCountries/AllCountriesContainer';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchSimple } from '../apiCalls';

function App() {
  const [homePreview, setHomePreview] = useState([])
  const [countriesSimple, setCountriesSimple] = useState([])

  useEffect(() => {
    fetchSimple()
    .then(data => {
      setCountriesSimple(data)
      const previewData = shuffleAndSlice(data)
      setHomePreview(previewData)
    })
    .catch(err => console.log(err))
  }, [])

  function shuffleAndSlice(countryData) {
      const shuffledArray = [...countryData];

      // Fisher-Yates Shuffle
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = shuffledArray[i];
        shuffledArray[i] = shuffledArray[j];
        shuffledArray[j] = temp;
      }
      return shuffledArray.slice(0, 3);
  }

  return (
    <div className="App">
      <Header />
      {/* <Home homePreview={homePreview} /> */}
      <AllCountries countriesSimple={countriesSimple} />
    </div>
  );
}

export default App;
