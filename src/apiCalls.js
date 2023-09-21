export function fetchSimple() {
    return fetch('https://restcountries.com/v3.1/all?fields=name,flags,ccn3')
    .then(res => {
        if(!res.ok) {
            throw new Error(`${res.status}`)
        }
        return res.json()
    })
}