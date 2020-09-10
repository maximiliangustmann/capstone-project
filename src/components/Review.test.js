import React from 'react'
import renderer from 'react-test-renderer'
import Review from './Review'

describe('Review', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Review />)
    expect(tree).toMatchSnapshot()
  })
})
