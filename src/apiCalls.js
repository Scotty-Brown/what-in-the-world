export function fetchSimple() {
    return fetch('https://restcountries.com/v3.1/all?fields=name,flags,ccn3')
    .then(res => {
        if(!res.ok) {
            throw new Error(`${res.status}`)
        }
        return res.json()
    })
}

export function fetchCountryDetails(countryCode) {
    return fetch(`https://restcountries.clpha/${countryCode}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error(`${res.status}`)
                }
                
                return res.json()
            })
}

export function fetchBorderCountryNames(countryCodes) {
    return fetch(`https://restcountries.com/v3.1/alpha?codes=${countryCodes}`)
            .then(res => {
                if(!res.ok) {
                    throw new Error(`${res.status}`)
                }

                return res.json()
            })
}