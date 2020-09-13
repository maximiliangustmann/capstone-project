/// <reference types="cypress" />

context('Create review', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('submit a new review', () => {
    cy.get('button').contains('Create new review').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label')
      .contains('Rating (0.0 - 10.0)')
      .find('input')
      .type('TestRating')

    cy.get('label').contains('Category').find('input').type('TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('h2').contains('TestTitle')

    cy.get('button').contains('Create new review').click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('not.have.value', 'TestTitle')
  })

  it('cancel a new review', () => {
    cy.get('button').contains('Create new review').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label')
      .contains('Rating (0.0 - 10.0)')
      .find('input')
      .type('TestRating')

    cy.get('label').contains('Category').find('input').type('TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Cancel').click()

    cy.get('button').contains('Create new review').click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('not.have.value', 'TestTitle')
  })

  it('save in local storage', () => {
    cy.get('button').contains('Create new review').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label')
      .contains('Rating (0.0 - 10.0)')
      .find('input')
      .type('TestRating')

    cy.get('label').contains('Category').find('input').type('TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.visit('http://localhost:3000/')

    cy.get('h2').contains('TestTitle')
  })
})
