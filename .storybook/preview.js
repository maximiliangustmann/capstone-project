import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import GlobalStyles from '../src/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const decorators = [
  (storyFn) => (
    <MemoryRouter>
      <GlobalStyles />
      {storyFn()}
    </MemoryRouter>
  ),
]
