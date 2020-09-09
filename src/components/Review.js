import React from 'react'
import styled from 'styled-components/macro'

export default function Review({
  title,
  rating,
  categorie,
  subcategorie,
  summary,
  lessons,
  index,
}) {
  return (
    <StyledReview key={index}>
      <h2>{title}</h2>
      <p>Rating: {rating}</p>
      <h3>{categorie}</h3>
      <h4>{subcategorie}</h4>
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
