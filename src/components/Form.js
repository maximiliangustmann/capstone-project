import React from 'react'
import styled from 'styled-components/macro'
import { NavLink, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Form({ onSubmit }) {
  const history = useHistory()
  const { register, handleSubmit, errors } = useForm()
  const onFormSubmit = (newReview) => {
    onSubmit(newReview)
    history.push('/')
  }
  return (
    <StyledForm onSubmit={handleSubmit(onFormSubmit)}>
      <label>
        Title
        <Input autoFocus name="title" ref={register({ required: true })} />
      </label>
      {errors.title && errors.title.type === 'required' && (
        <StyledErrorMessage>Title is required!</StyledErrorMessage>
      )}

      <label>
        Rating (1-100)
        <Input
          name="rating"
          ref={register({ required: true, pattern: /^[1-9][0-9]?$|^100$/ })}
        />
      </label>
      {errors.rating && errors.rating.type === 'required' && (
        <StyledErrorMessage>Rating is required!</StyledErrorMessage>
      )}
      {errors.rating && errors.rating.type === 'pattern' && (
        <StyledErrorMessage>
          Please choose a number between 0 and 100
        </StyledErrorMessage>
      )}

      <label>
        Category
        <Input name="category" ref={register({ required: true })} />
      </label>
      {errors.category && errors.category.type === 'required' && (
        <StyledErrorMessage>Category is required!</StyledErrorMessage>
      )}

      <label>
        Subcategory
        <Input name="subcategory" ref={register({ required: true })} />
      </label>
      {errors.subcategory && errors.subcategory.type === 'required' && (
        <StyledErrorMessage>Subcategory is required!</StyledErrorMessage>
      )}

      <label>
        Summary
        <Input name="summary" ref={register({ required: true })} />
      </label>
      {errors.summary && errors.summary.type === 'required' && (
        <StyledErrorMessage>Summary is required!</StyledErrorMessage>
      )}

      <label>
        Lessons
        <Input name="lessons" ref={register({ required: true })} />
      </label>
      {errors.lessons && errors.lessons.type === 'required' && (
        <StyledErrorMessage>Lessons is required!</StyledErrorMessage>
      )}

      <ButtonGroup>
        <NavLink exact to="/">
          <button type="reset">Cancel</button>
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

const StyledErrorMessage = styled.p`
  color: red;
  font-size: 75%;
  ::before {
    display: inline;
    content: '⚠ ';
  }
`
