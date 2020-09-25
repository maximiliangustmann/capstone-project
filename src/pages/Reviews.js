import React from 'react'
import Filter from '../components/Filter'
import Review from '../components/Review'
import Header from '../components/Header'

export default function Reviews({
  reviews,
  onRemove,
  onEdit,
  filters,
  active,
  setActive,
  activeFilter,
}) {
  return (
    <>
      <Header />

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

      <Filter
        filters={filters}
        active={active}
        setActive={setActive}
        activeFilter={activeFilter}
      />
    </>
  )
}
