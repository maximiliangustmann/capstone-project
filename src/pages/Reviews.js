import React from 'react'
import Filter from '../components/Filter'
import HomeButton from '../components/HomeButton'
import Review from '../components/Review'
import styled from 'styled-components/macro'

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
      <HomeButton />

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
