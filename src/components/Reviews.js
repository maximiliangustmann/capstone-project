import React from 'react'
import styled from 'styled-components/macro'
import reviews from '../mocks/reviews.json'

export default function Reviews() {
  return (
    <>
      {reviews.map((review, index) => (
        <Review key={index}>
          <h2>{review.title}</h2>
          <p>Rating: {review.rating}</p>
          <h3>{review.categorie}</h3>
          <h3>{review.subcategorie}</h3>
          <h3>Summary: </h3>
          <p>{review.summary}</p>
          <h3>Lessons: </h3>
          <p>{review.lessons}</p>
        </Review>
      ))}
    </>
  )
}

const Review = styled.section`
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
`
