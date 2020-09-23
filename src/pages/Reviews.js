import React, { useState } from 'react'
import Filter from '../components/Filter'
import Review from '../components/Review'

export default function Reviews({ reviews, onRemove, onEdit }) {
  const filters = ['Show all', 'Book', 'Audiobook', 'Podcast', 'Film', 'Series']
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
