/// <reference types="cypress" />

context('Create review', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('submit a new review', () => {
    cy.get('button').contains('Create new review').click()

    cy.visit('http://localhost:3000/create')

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('TestRating')

    cy.get('label').contains('Categorie').find('input').type('TestCategorie')

    cy.get('label')
      .contains('Subcategorie')
      .find('input')
      .type('TestSubcategorie')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('TestTitle')
  })

  it('cancel a new review', () => {
    cy.get('button').contains('Create new review').click()

    cy.visit('http://localhost:3000/create')

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('TestRating')

    cy.get('label').contains('Categorie').find('input').type('TestCategorie')

    cy.get('label')
      .contains('Subcategorie')
      .find('input')
      .type('TestSubcategorie')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Cancel').click()

    cy.visit('http://localhost:3000/')
  })
})