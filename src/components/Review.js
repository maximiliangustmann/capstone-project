import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Edit } from '../img/edit.svg'
import { ReactComponent as Delete } from '../img/delete.svg'

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
        <DeleteIcon />
      </DeleteButton>
      <EditButton type="button" onClick={() => onEdit(id)}>
        <EditIcon />
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
  margin: 40px 43px;
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
  border-radius: 50%;
  background-color: #f13d3c;
  padding: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
`

const EditButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: #52c397;
  padding: 20px;
  position: absolute;
  top: -10px;
  left: -10px;
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

const EditIcon = styled(Edit)`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 50%;
  width: 50%;
`

const DeleteIcon = styled(Delete)`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 50%;
  width: 50%;
`
