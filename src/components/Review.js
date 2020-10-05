import React from 'react'
import styled from 'styled-components/macro'
import { ReactComponent as Edit } from '../img/edit.svg'
import { ReactComponent as Delete } from '../img/delete.svg'
import PropTypes from 'prop-types'

Review.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  subcategory: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  lessons: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
}

export default function Review({
  title,
  rating,
  category,
  subcategory,
  summary,
  lessons,
  id,
  onRemove,
  onEdit,
}) {
  return (
    <StyledReview>
      <DeleteButton
        data-cy="delete"
        data-testid="delete"
        type="button"
        onClick={() => onRemove(id)}
      >
        <DeleteIcon />
      </DeleteButton>
      <EditButton
        data-cy="edit"
        data-testid="edit"
        type="button"
        onClick={() => onEdit(id)}
      >
        <EditIcon />
      </EditButton>
      <Title>{title}</Title>
      <Tags>
        <Tag data-cy="category">{category}</Tag>
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
  margin: 20px 43px;
  padding: 30px 32px;
  position: relative;
  background: var(--gradient-white);
  border-radius: 20px;
  box-shadow: var(--shadow-red-review);
  color: var(--main-black);
`

const DeleteButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: var(--main-red);
  padding: 20px;
  position: absolute;
  top: -10px;
  right: -10px;
`

const EditButton = styled.button`
  border: none;
  border-radius: 50%;
  background-color: var(--main-green);
  padding: 20px;
  position: absolute;
  top: -10px;
  left: -10px;
`

const Title = styled.h2`
  font-weight: 700;
  font-size: 1.5em;
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
  font-size: 1em;
  font-weight: 300;
  font-style: italic;
  padding: 5px;
`

const Summary = styled.h3`
  font-size: 1.125em;
  font-weight: 700;
  margin-top: 36px;
  margin-bottom: 20px;
`

const Lessons = styled.h3`
  font-size: 1.125em;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 20px;
`

const ReviewText = styled.p`
  font-size: 1em;
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
