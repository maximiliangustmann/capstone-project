import React from 'react'
import renderer from 'react-test-renderer'
import Form from './Form'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'

describe('Form', () => {
  const onSubmitMock = jest.fn()
  const editReviewMOck = it('renders the form', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Form onSubmit={onSubmitMock} />
      </MemoryRouter>
    )
    expect(getByText(/title/i)).toBeInTheDocument()
    expect(getByText(/rating/i)).toBeInTheDocument()
    expect(getByText(/subcategory/i)).toBeInTheDocument()
    expect(getByText(/summary/i)).toBeInTheDocument()
    expect(getByText(/lessons/i)).toBeInTheDocument()
    expect(getByText(/cancel/i)).toBeInTheDocument()
    expect(getByText(/submit/i)).toBeInTheDocument()
  })

  it('renders correctly', () => {
    const tree = renderer.create(
      <MemoryRouter>
        <Form onSubmit={onSubmitMock} />
      </MemoryRouter>
    )
    expect(tree).toMatchSnapshot()
  })
})
