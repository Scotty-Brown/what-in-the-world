import './SearchCountry.css'

function Search({setSearchInput}) {

    function handleChange(e) {
        setSearchInput(e.target.value)
    }

    return (
        <section className='search-container'>
            <label htmlFor='search' ></label>
            <input
                id='search'
                className='search-input'
                type='text'
                placeholder='Search For A Country'
                onChange={handleChange}
            />
        </section>
    )
}

export default Search