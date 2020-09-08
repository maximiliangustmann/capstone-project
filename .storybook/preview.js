import React from 'react'
import { MemoryRouter } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (storyFn) => <MemoryRouter>{storyFn()}</MemoryRouter>,
]
