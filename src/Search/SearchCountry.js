import './SearchCountry.css'

function Search({setSearchInput}) {

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

    return (
        <section className='search-container'>
            <label className='search-label' htmlFor='search' >Search for a country: </label>
            <input
                id='search'
                className='search-input'
                type='text'
                placeholder='Enter country'
                onChange={handleChange}
            />
        </section>
    )
}

export default Search