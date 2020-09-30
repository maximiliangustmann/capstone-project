import React from 'react'
import renderer from 'react-test-renderer'
import Filter from './Filter'

describe('Filter', () => {
  it('renders correctly', () => {
    const filters = [
      'Show all',
      'Book',
      'Audiobook',
      'Podcast',
      'Film',
      'Series',
    ]
    const tree = renderer.create(<Filter filters={filters} />)
    expect(tree).toMatchSnapshot()
  })
})
