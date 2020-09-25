import { useState } from 'react'

export default function useFilters() {
  const filters = [
    'Show all',
    'Books',
    'Audiobooks',
    'Podcasts',
    'Films',
    'Series',
  ]
  const [active, setActive] = useState(filters[0])
  function activeFilter(filter) {
    setActive(filter)
  }
  return {
    filters,
    active,
    setActive,
    activeFilter,
  }
}
