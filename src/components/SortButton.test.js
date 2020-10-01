import React from 'react'
import renderer from 'react-test-renderer'
import SortButton from './SortButton'

describe('SortButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<SortButton />)
    expect(tree).toMatchSnapshot()
  })
})
