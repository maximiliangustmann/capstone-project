import React from 'react'
import renderer from 'react-test-renderer'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

describe('Header', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
