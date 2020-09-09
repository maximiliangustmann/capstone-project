import React from 'react'
import Review from './Review'

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map((review, index) => (
        <Review key={index} {...review} />
      ))}
    </>
  )
}
