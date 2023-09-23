describe('All Countries Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 200,
      fixture: 'homeSpecData'
    }).as('homeSpecData')
    cy.visit('http://localhost:3000/').wait('@homeSpecData')
  })

  it('All Country Component', () => {
    cy.visit('http://localhost:3000/allCountries').wait('@homeSpecData')
    cy.get('.all-countries-container').children().should('have.length', 6)
    cy.get('.all-countries-container')
    .find('.preview-card')
    .first()
    .within(() => {
      cy.get('img').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/at.png')
      cy.get('.preview-card-name').should('exist').and('contain', 'Austria')
    })

    cy.get('.all-countries-container')
    .find('.preview-card')
    .last()
    .within(() => {
      cy.get('img').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/pt.png')
      cy.get('.preview-card-name').should('exist').and('contain', 'Portugal')
    })
  })

  it('All Countries NavLink', () => {
    cy.get('[href="/allCountries"]').click().wait('@homeSpecData')
    cy.url().should('eq', 'http://localhost:3000/allCountries')
  })
  
  it('Should show country details when clicked', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/040', {
      statusCode: 200,
      fixture: 'austriaData'
    }).as('austriaData')
    
    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha?codes=CZE,DEU,HUN,ITA,LIE,SVK,SVN,CHE', {
      statusCode: 200,
      fixture: 'austriaBorderData'
    }).as('austriaBorderData')
    
    cy.visit('http://localhost:3000/allCountries').wait('@homeSpecData')
    cy.get('[href="/040"]').click()
    cy.wait('@austriaData')
    cy.wait('@austriaBorderData')

    cy.url().should('eq', 'http://localhost:3000/040')
    cy.austriaCheck()

  })

})