describe('Error Component', () => {
  
  it('Should catch 400 level network errors on page load', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 400,
    })
    cy.visit('http://localhost:3000/')
  

    cy.get('.error-title').should('contain', 'Oops, something went wrong')
    cy.get('.error-action').should('contain', 'Please return home or try again later')
    cy.get('.return-home-btn').should('exist')
  })

  it('Should catch 500 level errors on page load', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 500,
    })
    cy.visit('http://localhost:3000/')
  

    cy.get('.error-title').should('contain', 'Oops, something went wrong')
    cy.get('.error-action').should('contain', 'Please return home or try again later')
    cy.get('.return-home-btn').should('exist')
  })

  it('Should let you return home - bad country data fetch', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 200,
      fixture: 'homeSpecData'
    }).as('homeSpecData')
    cy.visit('http://localhost:3000/').wait('@homeSpecData')

    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/620', {
      statusCode: 400,
    }).as('400countryData')

    cy.get('.learn-more').click()
    cy.get('.return-home-btn').click()
    cy.get('.hero-container').children().should('have.length', 2)
    cy.get('.hero-verbs').children().should('have.length', 4)
    cy.get('.highlight-container').children().should('have.length', 2)
    cy.get('.preview-card-container').children().should('have.length', 3)
  })

  it('Should let you return home - bad border data fetch', () => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
        statusCode: 200,
        fixture: 'homeSpecData'
      }).as('homeSpecData')
      cy.visit('http://localhost:3000/').wait('@homeSpecData')

      cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/620', {
        statusCode: 200,
        fixture: 'portugalData'
      }).as('portugalData')

      cy.intercept('GET', 'https://restcountries.com/v3.1/alpha?codes=ESP', {
        statusCode: 400,
      }).as('400borderData')

      cy.get('[href="/allCountries"]').click()
      cy.get('#search').type('Portugal')
      cy.get('[href="/620"]').click()
      cy.wait('@portugalData')
      cy.wait('@400borderData')
      cy.get('.return-home-btn').click()
    })

})