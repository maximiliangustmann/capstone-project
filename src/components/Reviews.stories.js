import React from 'react'
import Reviews from './Reviews'

export default {
  title: 'Reviews',
  component: Reviews,
}

const Template = (args) => <Reviews {...args} />

export const singleReview = Template.bind({})

singleReview.args = {}
