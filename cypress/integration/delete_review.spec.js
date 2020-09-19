/// <reference types="cypress" />

context('Delete review', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('deletes review', () => {
    cy.get('button').contains('Create new review').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('input').type('TestCategory')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('[data-cy=delete]').click()

    cy.contains('TestTitle').should('not.exist')
  })
})
