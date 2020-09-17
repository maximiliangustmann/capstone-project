/// <reference types="cypress" />

context('Edit review', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('edits review', () => {
    cy.get('button').contains('Create new review').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('input').type('TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('input').type('TestSummary')

    cy.get('label').contains('Lessons').find('input').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('h2').contains('TestTitle')

    cy.get('section')
      .contains('TestTitle')
      .siblings('button')
      .contains('Edit')
      .click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('have.value', 'TestTitle')

    cy.get('label').contains('Rating').find('input').should('have.value', '30')

    cy.get('label')
      .contains('Category')
      .find('input')
      .should('have.value', 'TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .should('have.value', 'TestSubcategory')

    cy.get('label')
      .contains('Summary')
      .find('input')
      .should('have.value', 'TestSummary')

    cy.get('label')
      .contains('Lessons')
      .find('input')
      .should('have.value', 'TestLessons')
  })
})
