import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Reviews from './Reviews'
import reviews from '../mocks/reviews.json'

describe('Reviews', () => {
  it('renders all properties', () => {
    const { getByText } = render(<Reviews reviews={reviews} />)
    expect(getByText(reviews)).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const tree = renderer.create(<Reviews />)
    expect(tree).toMatchSnapshot()
  })
})
