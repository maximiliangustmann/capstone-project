import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import renderer from 'react-test-renderer'
import Dashboard from './Dashboard'

describe('Dashboard', () => {
  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Dashboard />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
