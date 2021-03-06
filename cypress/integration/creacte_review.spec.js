/// <reference types="cypress" />

context('Create review', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('submits a new review', () => {
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

    cy.visit('/')

    cy.get('[data-cy=create]').click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('not.have.value', 'TestTitle')
  })

  it('cancels a new review', () => {
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

    cy.get('button').contains('Cancel').click()

    cy.get('[data-cy=add-icon]').click()

    cy.get('label')
      .contains('Title')
      .find('input')
      .should('not.have.value', 'TestTitle')
  })

  it('saves in local storage', () => {
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
  })

  it('validates wrong rating pattern', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('TestRating')
    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('Please')
  })

  it('validates missing title input', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('required')
  })

  it('validates missing rating input', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('required')
  })

  it('validates missing subcategory input', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('required')
  })

  it('validates missing summary input', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Lessons').find('textarea').type('TestLessons')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('required')
  })

  it('validates missing lessons input', () => {
    cy.get('[data-cy=create]').click()

    cy.get('label').contains('Title').find('input').type('TestTitle')

    cy.get('label').contains('Rating').find('input').type('30')

    cy.get('label').contains('Category').find('select').select('Film')

    cy.get('label')
      .contains('Subcategory')
      .find('input')
      .type('TestSubcategory')

    cy.get('label').contains('Summary').find('textarea').type('TestSummary')

    cy.get('button').contains('Submit').click()

    cy.get('p').contains('required')
  })
})
