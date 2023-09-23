describe('SingleCountry Spec', () => {

  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 200,
      fixture: 'homeSpecData'
    }).as('homeSpecData')
    cy.visit('http://localhost:3000/').wait('@homeSpecData')
  })

  it('Portugal', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/620', {
      statusCode: 200,
      fixture: 'portugalData'
    }).as('portugalData')

    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha?codes=ESP', {
      statusCode: 200,
      fixture: 'portugalBorderCo'
    }).as('portugalBorderCo')

    cy.get('.learn-more').click()
    cy.wait('@portugalData')
    cy.wait('@portugalBorderCo')
    cy.portugalCheck()

    cy.get('[href="/allCountries"]').click()
    cy.get('[href="/620"]').click()
    cy.wait('@portugalData')
    cy.wait('@portugalBorderCo')
    cy.portugalCheck()
    
  })

  it('Austria', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/040', {
      statusCode: 200,
      fixture: 'austriaData'
    }).as('austriaData')
    
    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha?codes=CZE,DEU,HUN,ITA,LIE,SVK,SVN,CHE', {
      statusCode: 200,
      fixture: 'austriaBorderData'
    }).as('austriaBorderData')

    cy.get('[href="/040"]').click()
    cy.wait('@austriaData')
    cy.wait('@austriaBorderData')
    cy.austriaCheck()

    cy.get('[href="/allCountries"]').click()
    cy.get('[href="/040"]').click()
    cy.wait('@austriaData')
    cy.wait('@austriaBorderData')
    cy.austriaCheck()
    
  })
})

