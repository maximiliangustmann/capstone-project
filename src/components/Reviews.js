import React, { useState } from 'react'
import Filter from './Filter'
import Review from './Review'

export default function Reviews({ reviews, onRemove, onEdit }) {
  const filters = ['Show all', 'book', 'audiobook', 'podcast', 'film', 'series']
  const [active, setActive] = useState(filters[0])
  return (
    <>
      <Filter filters={filters} active={active} setActive={setActive} />
      {reviews
        ?.filter(
          (reviews) =>
            active === 'Show all' || reviews.category.includes(active)
        )
        .map((review) => (
          <Review
            key={review.id}
            {...review}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        ))}
    </>
  )
}
