import { useState } from 'react'

export default function useFilters() {
  const filters = ['Show all', 'Book', 'Audiobook', 'Podcast', 'Film', 'Series']
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
