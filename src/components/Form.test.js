import React from 'react'
import renderer from 'react-test-renderer'
import Form from './Form'
import { MemoryRouter } from 'react-router-dom'

describe('Form', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Form />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
