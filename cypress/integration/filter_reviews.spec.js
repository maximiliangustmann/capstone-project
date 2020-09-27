/// <reference types="cypress" />

const mockData = [
  {
    title: 'The 4-hour work week',
    rating: '97',
    category: 'Book',
    subcategory: 'Non-fiction',
    summary: 'Guide to life your dreamlife',
    lessons: 'Living more working less',
  },
  {
    title: 'Sapiens: A brief history of mankind',
    rating: '90',
    category: 'Audiobook',
    subcategory: 'Non-fiction',
    summary: 'Describes the evolution of the homo sapiens',
    lessons: 'Most things we take as given, are only constructs of our mind',
  },
  {
    title: 'The fantasy footballers',
    rating: '95',
    category: 'Podcast',
    subcategory: 'Fantasy Football',
    summary: 'Podcast about all fantasy relevent things',
    lessons: 'Calvin Ridley is a beast',
  },
  {
    title: 'The perks of being a wallflower',
    rating: '100',
    category: 'Film',
    subcategory: 'Coming of age',
    summary: 'Charlie is a wallflower and tries to find new friends',
    lessons: 'Friends are important',
  },
  {
    title: 'Peaky Blinders',
    rating: '96',
    category: 'Series',
    subcategory: 'Drama',
    summary:
      'A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.',
    lessons: 'Sell yourself',
  },
]

context('Filter reviews', () => {
  beforeEach(() => {
    cy.visit('/')
  })
  it('filter reviews with filter', () => {
    mockData.forEach((data) => {
      cy.get('[data-cy=create]').click()
      cy.get('label')
        .contains('Title')
        .find('input')
        .type(data.title)
        .should('have.value', data.title)
      cy.get('label')
        .contains('Rating')
        .find('input')
        .type(data.rating)
        .should('have.value', data.rating)
      cy.get('label')
        .contains('Category')
        .find('select')
        .select(data.category)
        .should('have.value', data.category)
      cy.get('label')
        .contains('Subcategory')
        .find('input')
        .type(data.subcategory)
        .should('have.value', data.subcategory)
      cy.get('label')
        .contains('Summary')
        .find('textarea')
        .type(data.summary)
        .should('have.value', data.summary)
      cy.get('label')
        .contains('Lessons')
        .find('textarea')
        .type(data.lessons)
        .should('have.value', data.lessons)
      cy.get('button').contains('Submit').click()
      cy.get('[data-cy=homebutton]').click()
    })
    cy.visit('/reviews')
    cy.get('button').contains('Show all').click()
    mockData.forEach((data) => {
      cy.get('h2').contains(data.title)
    })
    cy.get('[data-cy=filterbar]').find('button').contains('Book').click()
    cy.get('[data-cy=category]').should('have.text', 'Book')
    cy.get('[data-cy=filterbar]').find('button').contains('Audiobook').click()
    cy.get('[data-cy=category]').should('have.text', 'Audiobook')
    cy.get('[data-cy=filterbar]').find('button').contains('Podcast').click()
    cy.get('[data-cy=category]').should('have.text', 'Podcast')
    cy.get('[data-cy=filterbar]').find('button').contains('Film').click()
    cy.get('[data-cy=category]').should('have.text', 'Film')
    cy.get('[data-cy=filterbar]').find('button').contains('Series').click()
    cy.get('[data-cy=category]').should('have.text', 'Series')
  })
  it('filter reviews with navicons', () => {
    mockData.forEach((data) => {
      cy.get('[data-cy=create]').click()
      cy.get('label')
        .contains('Title')
        .find('input')
        .type(data.title)
        .should('have.value', data.title)
      cy.get('label')
        .contains('Rating')
        .find('input')
        .type(data.rating)
        .should('have.value', data.rating)
      cy.get('label')
        .contains('Category')
        .find('select')
        .select(data.category)
        .should('have.value', data.category)
      cy.get('label')
        .contains('Subcategory')
        .find('input')
        .type(data.subcategory)
        .should('have.value', data.subcategory)
      cy.get('label')
        .contains('Summary')
        .find('textarea')
        .type(data.summary)
        .should('have.value', data.summary)
      cy.get('label')
        .contains('Lessons')
        .find('textarea')
        .type(data.lessons)
        .should('have.value', data.lessons)
      cy.get('button').contains('Submit').click()
      cy.get('[data-cy=homebutton]').click()
    })
    cy.get('[data-cy=book-icon]').click()
    cy.get('[data-cy=category]').should('have.text', 'Book')
    cy.get('[data-cy=homebutton]').click()
    cy.get('[data-cy=audiobook-icon]').click()
    cy.get('[data-cy=category]').should('have.text', 'Audiobook')
    cy.get('[data-cy=homebutton]').click()
    cy.get('[data-cy=podcast-icon]').click()
    cy.get('[data-cy=category]').should('have.text', 'Podcast')
    cy.get('[data-cy=homebutton]').click()
    cy.get('[data-cy=film-icon]').click()
    cy.get('[data-cy=category]').should('have.text', 'Film')
    cy.get('[data-cy=homebutton]').click()
    cy.get('[data-cy=series-icon]').click()
    cy.get('[data-cy=category]').should('have.text', 'Series')
    cy.get('[data-cy=homebutton]').click()
  })
})
