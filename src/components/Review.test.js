import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import renderer from 'react-test-renderer'
import Review from './Review'

describe('Review', () => {
  const onRemoveMock = jest.fn()
  const onEditMock = jest.fn()
  const title = 'TestTitle'
  const rating = 'TestRating'
  const category = 'TestCategory'
  const subcategory = 'TestSubcategory'
  const summary = 'TestSummary'
  const lessons = 'TestLessons'
  const id = 'TestId'
  it('calls onRemove on remove click', () => {
    const { getByTestId } = render(
      <Review
        onRemove={onRemoveMock}
        onEdit={onEditMock}
        title={title}
        rating={rating}
        category={category}
        subcategory={subcategory}
        summary={summary}
        lessons={lessons}
        id={id}
      />
    )
    const removeButton = getByTestId('delete')
    userEvent.click(removeButton)
    expect(onRemoveMock).toHaveBeenCalled()
  })

  it('calls onEdit on edit click', () => {
    const { getByTestId } = render(
      <Review
        onEdit={onEditMock}
        onRemove={onRemoveMock}
        title={title}
        rating={rating}
        category={category}
        subcategory={subcategory}
        summary={summary}
        lessons={lessons}
        id={id}
      />
    )
    const editButton = getByTestId('edit')
    userEvent.click(editButton)
    expect(onEditMock).toHaveBeenCalled()
  })

  it('renders correctly', () => {
    const noOp = () => {}
    const tree = renderer.create(
      <Review
        onRemove={noOp}
        onEdit={noOp}
        title={title}
        rating={rating}
        category={category}
        subcategory={subcategory}
        summary={summary}
        lessons={lessons}
        id={id}
      />
    )
    expect(tree).toMatchSnapshot()
  })
})
