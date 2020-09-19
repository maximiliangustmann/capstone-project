import React from 'react'
import styled from 'styled-components/macro'

export default function Review({
  title,
  rating,
  category,
  subcategory,
  summary,
  lessons,
  onRemove,
  onEdit,
  id,
}) {
  return (
    <StyledReview>
      <DeleteButton type="button" onClick={() => onRemove(id)}>
        x
      </DeleteButton>
      <EditButton type="button" onClick={() => onEdit(id)}>
        Edit
      </EditButton>
      <Title>{title}</Title>
      <Tags>
        <Tag>{category}</Tag>
        <Tag>{subcategory}</Tag>
        <Tag>{rating}</Tag>
      </Tags>
      <Summary>Summary </Summary>
      <ReviewText>{summary}</ReviewText>
      <Lessons>Lessons </Lessons>
      <ReviewText>{lessons}</ReviewText>
    </StyledReview>
  )
}

const StyledReview = styled.section`
  margin: 30px 43px;
  padding: 30px 32px;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(244, 244, 244, 1),
    rgba(181, 181, 181, 1)
  );
  border-radius: 20px;
  box-shadow: 10px 10px 50px #f13d3c4d;
  color: #00001d;
`

const DeleteButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 5px;
  right: 5px;
`

const EditButton = styled.button`
  border: none;
  background-color: transparent;
  position: absolute;
  top: 5px;
  left: 5px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
`

const Tags = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const Tag = styled.button`
  background: none;
  border: solid 1px #00001d;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 300;
  font-style: italic;
  padding: 5px;
`

const Summary = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 36px;
  margin-bottom: 20px;
`

const Lessons = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
`

const ReviewText = styled.p`
  font-size: 16px;
  font-weight: 300;
`
