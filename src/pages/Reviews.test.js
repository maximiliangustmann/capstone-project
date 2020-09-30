import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Reviews from './Reviews'

describe('Reviews', () => {
  it('renders correctly', () => {
    const filters = [
      'Show all',
      'Book',
      'Audiobook',
      'Podcast',
      'Film',
      'Series',
    ]
    const tree = renderer.create(
      <MemoryRouter>
        <Reviews filters={filters} />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
