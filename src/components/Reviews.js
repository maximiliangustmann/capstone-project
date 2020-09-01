import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import reviews from '../mocks/reviews.json'

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  categorie: PropTypes.string.isRequired,
  subcategorie: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
}

export default function Reviews() {
  return (
    <>
      {reviews.map((review, index) => (
        <Review>
          <h2 key={index}>{review.title}</h2>
          <p key={index}>Rating: {review.rating}</p>
          <h3 key={index}>{review.categorie}</h3>
          <h3 key={index}>{review.subcategorie}</h3>
          <h3>Summary: </h3>
          <p key={index}>{review.summary}</p>
          <h3 key={index}>Lessons: </h3>
          <p key={index}>{review.lessons}</p>
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
