import React from 'react'
import Review from './Review'

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review) => {
        return <Review key={review.title} {...review} />
      })}
    </>
  )
}
