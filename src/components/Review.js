import React from 'react'
import styled from 'styled-components/macro'

export default function Review({
  title,
  rating,
  category,
  subcategory,
  summary,
  lessons,
}) {
  return (
    <StyledReview>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <h3>{category}</h3>
      <h4>{subcategory}</h4>
      <h3>Summary: </h3>
      <p>{summary}</p>
      <h3>Lessons: </h3>
      <p>{lessons}</p>
    </StyledReview>
  )
}

const StyledReview = styled.section`
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
`
