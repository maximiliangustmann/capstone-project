import React from 'react'
import renderer from 'react-test-renderer'
import CreateButton from './CreateButton'
import { MemoryRouter } from 'react-router-dom'

describe('CreateButton', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CreateButton />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
