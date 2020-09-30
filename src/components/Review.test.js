import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import renderer from 'react-test-renderer'
import Review from './Review'

describe('Review', () => {
  it('calls onRemove on remove click', () => {
    const onRemoveMock = jest.fn()
    const { getByTestId } = render(<Review onRemove={onRemoveMock} />)
    const removeButton = getByTestId('delete')
    userEvent.click(removeButton)
    expect(onRemoveMock).toHaveBeenCalled()
  })

  it('calls onEdit on edit click', () => {
    const onEditMock = jest.fn()
    const { getByTestId } = render(<Review onEdit={onEditMock} />)
    const editButton = getByTestId('edit')
    userEvent.click(editButton)
    expect(onEditMock).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Review />)
    expect(tree).toMatchSnapshot()
  })
})
