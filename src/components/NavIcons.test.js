import React from 'react'
import renderer from 'react-test-renderer'
import NavIcons from './NavIcons'

describe('NavIcons', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<NavIcons />)
    expect(tree).toMatchSnapshot()
  })
})
