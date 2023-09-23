
Cypress.Commands.add('portugalCheck', () => {
    cy.url().should('eq', 'http://localhost:3000/620')
    cy.get('.graphics-container > :nth-child(1)').should('contain', 'Portugal Flag')
    cy.get('.country-flag').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/pt.png')
    cy.get('.graphics-container > :nth-child(3)').should('contain', 'Portugal Coat of Arms')
    cy.get('.country-coa').should('have.attr', 'src').and('contain', 'https://mainfacts.com/media/images/coats_of_arms/pt.png')

    cy.get('.main-data-container').children().should('have.length', 7)
    cy.get('.main-data-container > :nth-child(1)').should('contain', 'Common Name: Portugal')
    cy.get('.main-data-container > :nth-child(2)').should('contain', 'Native Name: República português')
    cy.get('.main-data-container > :nth-child(3)').should('contain', 'Capital: Lisbon')
    cy.get('.main-data-container > :nth-child(4)').should('contain', 'Common Language Spoken: Portuguese')
    cy.get('.main-data-container > :nth-child(5)').should('contain', 'Population: 10305564')
    cy.get('.main-data-container > :nth-child(6)').should('contain', 'Currencies: Euro')
    cy.get('.main-data-container > :nth-child(7)').should('contain', 'Cars drive on the right side of the road.')

    cy.get('.graphical-data-container').children().should('have.length', 5)
    cy.get('.graphical-data-container > :nth-child(1)').should('contain', 'Region: Europe')
    cy.get('.graphical-data-container > :nth-child(2)').should('contain', 'Subregion: Southern Europe')
    cy.get('.graphical-data-container > :nth-child(3)').should('contain', 'Continent: Europe')
    cy.get('.graphical-data-container > :nth-child(4)').should('contain', 'Border Countries: Spain')
    cy.get('.google-map-link').should('contain', 'View Location in Google Maps')
})

Cypress.Commands.add('austriaCheck', () => {
    cy.url().should('eq', 'http://localhost:3000/040')
    cy.get('.graphics-container > :nth-child(1)').should('contain', 'Austria Flag')
    cy.get('.country-flag').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/at.png')
    cy.get('.graphics-container > :nth-child(3)').should('contain', 'Austria Coat of Arms')
    cy.get('.country-coa').should('have.attr', 'src').and('contain', 'https://mainfacts.com/media/images/coats_of_arms/at.png')

    cy.get('.main-data-container').children().should('have.length', 7)
    cy.get('.main-data-container > :nth-child(1)').should('contain', 'Common Name: Austria')
    cy.get('.main-data-container > :nth-child(2)').should('contain', 'Native Name: Republik Österreich')
    cy.get('.main-data-container > :nth-child(3)').should('contain', 'Capital: Vienna')
    cy.get('.main-data-container > :nth-child(4)').should('contain', 'Common Language Spoken: No Data Available')
    cy.get('.main-data-container > :nth-child(5)').should('contain', 'Population: 8917205')
    cy.get('.main-data-container > :nth-child(6)').should('contain', 'Currencies: Euro')
    cy.get('.main-data-container > :nth-child(7)').should('contain', 'Cars drive on the right side of the road.')

    cy.get('.graphical-data-container').children().should('have.length', 5)
    cy.get('.graphical-data-container > :nth-child(1)').should('contain', 'Region: Europe')
    cy.get('.graphical-data-container > :nth-child(2)').should('contain', 'Subregion: Central Europe')
    cy.get('.graphical-data-container > :nth-child(3)').should('contain', 'Continent: Europe')
    cy.get('.graphical-data-container > :nth-child(4)').should('contain', 'Border Countries: Hungary, Slovenia, Switzerland, Czechia, Germany, Liechtenstein, Italy, Slovakia')
    cy.get('.google-map-link').should('contain', 'View Location in Google Maps')
})

Cypress.Commands.add('searchCountryCheck', (country, countryCode, imgSRC) => {
    cy.get('#search').type(country);
    cy.get(countryCode).should('exist')
    cy.get('.preview-image').should('have.attr', 'src', imgSRC)
    cy.get('.preview-card-name').should('contain', country)
    cy.get('#search').clear()
})
