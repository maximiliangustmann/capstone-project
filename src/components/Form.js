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
      <Label>
        Title
        <Input
          autoFocus
          name="title"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </Label>
      {errors.title && errors.title.type === 'required' && (
        <ErrorMessage>Title is required!</ErrorMessage>
      )}

      <Label>
        Rating (1-100)
        <Input
          name="rating"
          ref={register({ required: true, pattern: /^[1-9][0-9]?$|^100$/ })}
        />
      </Label>
      {errors.rating && errors.rating.type === 'required' && (
        <ErrorMessage>Rating is required!</ErrorMessage>
      )}
      {errors.rating && errors.rating.type === 'pattern' && (
        <ErrorMessage>Please choose a number between 1 and 100</ErrorMessage>
      )}

      <Label>
        Category
        <Select name="category" ref={register({ required: true })}>
          <option value="Book">Book</option>
          <option value="Audiobook">Audiobook</option>
          <option value="Podcast">Podcast</option>
          <option value="Film">Film</option>
          <option value="Series">Series</option>
        </Select>
      </Label>
      {errors.category && errors.category.type === 'required' && (
        <ErrorMessage>Category is required!</ErrorMessage>
      )}

      <Label>
        Subcategory
        <Input
          name="subcategory"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </Label>
      {errors.subcategory && errors.subcategory.type === 'required' && (
        <ErrorMessage>Subcategory is required!</ErrorMessage>
      )}

      <Label>
        Summary
        <Textarea
          name="summary"
          rows="3"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </Label>
      {errors.summary && errors.summary.type === 'required' && (
        <ErrorMessage>Summary is required!</ErrorMessage>
      )}

      <Label>
        Lessons
        <Textarea
          name="lessons"
          rows="3"
          ref={register({ required: true, pattern: /.*\S.*/ })}
        />
      </Label>
      {errors.lessons && errors.lessons.type === 'required' && (
        <ErrorMessage>Lessons is required!</ErrorMessage>
      )}

      <ButtonGroup>
        <NavLink exact to="/">
          <ButtonReset
            type="reset"
            onClick={() => setEditReviewState(undefined)}
          >
            Cancel
          </ButtonReset>
        </NavLink>
        <ButtonSubmit type="submit">Submit</ButtonSubmit>
      </ButtonGroup>
    </StyledForm>
  )
}

const StyledForm = styled.form`
  display: grid;
  gap: 32px;
  align-content: start;
  margin: 40px 52px;
`

const Input = styled.input`
  background-color: var(--main-white);
  color: var(--main-black);
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin: 0;
`

const Select = styled.select`
  background-color: var(--main-white);
  color: var(--main-black);
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin: 0;
`

const Textarea = styled.textarea`
  background-color: var(--main-white);
  color: var(--main-black);
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin: 0;
`

const Label = styled.label`
  font-size: 18px;
  font-weight: 700;
  color: var(--main-white);
`

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
`

const ErrorMessage = styled.p`
  color: red;
  font-size: 75%;
  ::before {
    display: inline;
    content: '⚠ ';
  }
`

const ButtonReset = styled.button`
  background: var(--gradient-red);
  border: none;
  border-radius: 50px;
  box-shadow: var(--shadow-red-30);
  font-size: 22pt;
  color: var(--main-white);
  font-weight: 500;
  padding: 9px 14px;
`

const ButtonSubmit = styled.button`
  background: var(--gradient-green);
  border: none;
  border-radius: 50px;
  box-shadow: var(--shadow-green);
  font-size: 22pt;
  color: var(--main-white);
  font-weight: 500;
  padding: 9px 14px;
`
