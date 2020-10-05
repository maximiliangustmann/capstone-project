import React from 'react'
import Filter from '../components/Filter'
import Review from '../components/Review'
import Header from '../components/Header'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Reviews.propTypes = {
  reviews: PropTypes.array,
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
  filters: PropTypes.array,
  active: PropTypes.string,
  setActive: PropTypes.func,
  activeFilter: PropTypes.func,
  sortBySubcategory: PropTypes.func,
  sortByRating: PropTypes.func,
}

export default function Reviews({
  reviews,
  onRemove,
  onEdit,
  filters,
  active,
  setActive,
  activeFilter,
  sortBySubcategory,
  sortByRating,
}) {
  return (
    <>
      <Header
        sortBySubcategory={sortBySubcategory}
        sortByRating={sortByRating}
      />
      <StyledReviews>
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
      </StyledReviews>

      <Filter
        filters={filters}
        active={active}
        setActive={setActive}
        activeFilter={activeFilter}
      />
    </>
  )
}

const StyledReviews = styled.div`
  display: grid;
  gap: 20px;
  @media (min-width: 750px) and (max-width: 1124px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1125px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`
