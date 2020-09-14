import React from 'react'
import Review from './Review'

export default function Reviews({ reviews, onRemove }) {
  return (
    <>
      {reviews.map((review) => {
        return <Review key={review.title} {...review} onRemove={onRemove} />
      })}
    </>
  )
}
