import React from 'react'
import renderer from 'react-test-renderer'
import CreateForm from './CreateForm'
import { MemoryRouter } from 'react-router-dom'

describe('CreateForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CreateForm />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
