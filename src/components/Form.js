import React, { useEffect } from 'react'
import styled from 'styled-components/macro'
import { NavLink, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

export default function Form({
  onSubmit,
  editReview,
  editReviewState,
  setEditReviewState,
}) {
  const history = useHistory()
  const { register, handleSubmit, errors, setValue } = useForm()

  const onFormSubmit = (newReview) => {
    if (editReviewState) {
      editReview({ ...newReview, id: editReviewState.id })
      setEditReviewState(undefined)
      history.push('/')
    } else {
      onSubmit({ ...newReview, id: uuidv4() })
      history.push('/')
    }
  }

  useEffect(() => {
    if (editReviewState) {
      setValue('title', editReviewState.title)
      setValue('rating', editReviewState.rating)
      setValue('category', editReviewState.category)
      setValue('subcategory', editReviewState.subcategory)
      setValue('summary', editReviewState.summary)
      setValue('lessons', editReviewState.lessons)
    }
  }, [editReviewState, setValue])
  return (
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
      <label>
        Title
        <Input
          autoFocus
          name="title"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </label>
      {errors.title && errors.title.type === 'required' && (
        <ErrorMessage>Title is required!</ErrorMessage>
      )}

      <label>
        Rating (1-100)
        <Input
          name="rating"
          ref={register({ required: true, pattern: /^[1-9][0-9]?$|^100$/ })}
        />
      </label>
      {errors.rating && errors.rating.type === 'required' && (
        <ErrorMessage>Rating is required!</ErrorMessage>
      )}
      {errors.rating && errors.rating.type === 'pattern' && (
        <ErrorMessage>Please choose a number between 1 and 100</ErrorMessage>
      )}

      <label>
        Category
        <Input
          name="category"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </label>
      {errors.category && errors.category.type === 'required' && (
        <ErrorMessage>Category is required!</ErrorMessage>
      )}

      <label>
        Subcategory
        <Input
          name="subcategory"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </label>
      {errors.subcategory && errors.subcategory.type === 'required' && (
        <ErrorMessage>Subcategory is required!</ErrorMessage>
      )}

      <label>
        Summary
        <Input
          name="summary"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </label>
      {errors.summary && errors.summary.type === 'required' && (
        <ErrorMessage>Summary is required!</ErrorMessage>
      )}

      <label>
        Lessons
        <Input
          name="lessons"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </label>
      {errors.lessons && errors.lessons.type === 'required' && (
        <ErrorMessage>Lessons is required!</ErrorMessage>
      )}

      <ButtonGroup>
        <NavLink exact to="/">
          <button type="reset" onClick={() => setEditReviewState(undefined)}>
            Cancel
          </button>
        </NavLink>
        <button type="submit">Submit</button>
      </ButtonGroup>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: grid;
  gap: 20px;
  align-content: start;
  margin: 20px;
  padding: 20px;
  width: 100px;
`

const Input = styled.input`
  margin: 0 20px;
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 75%;
  ::before {
    display: inline;
    content: '⚠ ';
  }
`
