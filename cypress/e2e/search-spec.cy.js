describe('Search Component', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 200,
      fixture: 'homeSpecData'
    }).as('homeSpecData')
    cy.visit('http://localhost:3000/').wait('@homeSpecData')
    cy.get('[href="/allCountries"]').click()
  })

  it('Should exist', () => {
    cy.get('.search-label').should('contain', 'Search for a country:')
    cy.get('.search-input').should('have.attr', 'type', 'text')
    cy.get('.search-input').should('have.attr', 'placeholder', 'Enter country')
  })

  it('Should be able to search for different countries', () => {
    cy.searchCountryCheck('Portugal', '#620', 'https://flagcdn.com/w320/pt.png')
    cy.searchCountryCheck('Austria', '#040', 'https://flagcdn.com/w320/at.png')
    cy.searchCountryCheck('Greece', '#300', 'https://flagcdn.com/w320/gr.png')
    cy.searchCountryCheck('Botswana', '#072', 'https://flagcdn.com/w320/bw.png')
    cy.searchCountryCheck('Uruguay', '#858', 'https://flagcdn.com/w320/uy.png')
    cy.searchCountryCheck('Colombia', '#170', 'https://flagcdn.com/w320/co.png')
  })

})