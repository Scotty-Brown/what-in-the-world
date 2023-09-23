describe('Home Spec', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://restcountries.com/v3.1/all?fields=name,flags,ccn3', {
      statusCode: 200,
      fixture: 'homeSpecData'
    }).as('homeSpecData')
    cy.visit('http://localhost:3000/').wait('@homeSpecData')
  })


  it('Header Component', () => {
    cy.get('.page-title').should('contain', "What in the world...")
    cy.get('.active').should('contain', 'Home')
    cy.get('[href="/allCountries"]').should('contain', "All Countries")
  })

  it('Hero Component', () => {
    cy.get('.hero-container').children().should('have.length', 2)
    cy.get('.hero-verbs').children().should('have.length', 4)
    cy.get('.hero-title').should('contain', "Explore with us...")
    cy.get('.discover').should('contain', "Discover 📖")
    cy.get('.learn').should('contain', "Learn 💡")
    cy.get('.grow').should('contain', "Grow 🪴")
    cy.get('.hero-statement-globe').children().should('have.length', 2)
    cy.get('.hero-globe').should('contain', "🌎")
    cy.get('.hero-statement').should('contain', "Exploring countries through their flags, currencies, languages, and more, drawing you closer to the global community, one piece of information at a time.")
  })

  it('Highlight Component', () => {

    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha/620', {
      statusCode: 200,
      fixture: 'portugalData'
    }).as('portugalData')

    cy.intercept('GET', 'https://restcountries.com/v3.1/alpha?codes=ESP', {
      statusCode: 200,
      fixture: 'portugalBorderCo'
    }).as('portugalBorderCo')

    cy.get('.highlight-container').children().should('have.length', 2)
    cy.get('.highlight-container > img').should('have.attr', 'src').and('include', 'highlightImg')
    cy.get('.highlight-location').should('contain', '📍Lisbon, Portugal')
    cy.get('.learn-more').should('contain', 'Learn More About Portugal!').click().wait('@portugalData')
    cy.wait('@portugalBorderCo')
    cy.url().should('eq', 'http://localhost:3000/620')
  })

  it('Preview Component', () => {
    cy.get('.preview-card-container').children().should('have.length', 3)
    cy.get('.preview-card-container')
    .find('.preview-card')
    .first()
    .within(() => {
      cy.get('img').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/bw.png')
      cy.get('.preview-card-name').should('exist').and('contain', 'Botswana')
    })

    cy.get('.preview-card-container')
    .find('.preview-card')
    .last()
    .within(() => {
      cy.get('img').should('have.attr', 'src').and('contain', 'https://flagcdn.com/w320/co.png')
      cy.get('.preview-card-name').should('exist').and('contain', 'Colombia')
    })

  })

})