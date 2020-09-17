import React from 'react'
import Review from './Review'

export default function Reviews({ reviews, onRemove, onEdit }) {
  return (
    <>
      {reviews.map((review) => {
        return (
          <Review
            key={review.id}
            {...review}
            onRemove={onRemove}
            onEdit={onEdit}
          />
        )
      })}
    </>
  )
}
