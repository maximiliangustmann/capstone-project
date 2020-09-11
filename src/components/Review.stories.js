import React from 'react'
import Review from './Review'

export default {
  title: 'Review',
  component: Review,
}

const Template = (args) => <Review {...args} />

export const singleReview = Template.bind({})
singleReview.args = {
  title: 'The 4-hour work week',
  rating: '9.7',
  category: 'Book',
  subcategory: 'Non-fiction',
  summary: 'Guide to life your dreamlife',
  lessons: 'Living more working less',
}
