/// <reference types="cypress" />

context('Edit review', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('edits review', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.visit('/reviews')

    cy.get('h2').contains('TestTitle')

    cy.get('[data-cy=edit]').click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('have.value', 'TestTitle')

    cy.get('label').contains('Rating').find('input').should('have.value', '30')

    cy.get('label')
      .contains('Category')
      .find('select')
      .should('have.value', 'Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .should('have.value', 'TestSubcategory')

    cy.get('label')
      .contains('Summary')
      .find('textarea')
      .should('have.value', 'TestSummary')

    cy.get('label')
      .contains('Lessons')
      .find('textarea')
      .should('have.value', 'TestLessons')
  })
})
