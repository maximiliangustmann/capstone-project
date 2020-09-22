import React from 'react'
import Filter from './Filter'

export default {
  title: 'Filter',
  component: Filter,
}

const filters = ['Show all', 'Book', 'Audiobook', 'Podcast', 'Film', 'Series']

const Template = (args) => <Filter {...args} filters={filters} />

export const filter = Template.bind({})
