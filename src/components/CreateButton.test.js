import React from 'react'
import renderer from 'react-test-renderer'
import CreateButton from './CreateButton'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

describe('CreateButton', () => {
  it('has the correct title', () => {
    const { getByText } = render(
      <MemoryRouter>
        <CreateButton />
      </MemoryRouter>
    )
    expect(getByText('Create new review')).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <CreateButton />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
