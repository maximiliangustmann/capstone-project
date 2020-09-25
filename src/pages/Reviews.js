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
    <PageLayout>
      <HomeButton />
      <ReviewWrapper>
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
      </ReviewWrapper>
      <Filter
        filters={filters}
        active={active}
        setActive={setActive}
        activeFilter={activeFilter}
      />
    </PageLayout>
  )
}

const PageLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
`

const ReviewWrapper = styled.div`
  grid-row: 2;
`
