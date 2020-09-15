import React from 'react'
import styled from 'styled-components/macro'
import { NavLink, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export default function Form({ onSubmit }) {
  const history = useHistory()
  const { register, handleSubmit } = useForm()
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
      <label>
        Rating (0.0 - 10.0)
        <Input name="rating" ref={register({ required: true })} />
      </label>
      <label>
        Category
        <Input name="category" ref={register({ required: true })} />
      </label>
      <label>
        Subcategory
        <Input name="subcategory" ref={register({ required: true })} />
      </label>
      <label>
        Summary
        <Input name="summary" ref={register({ required: true })} />
      </label>
      <label>
        Lessons
        <Input name="lessons" ref={register({ required: true })} />
      </label>
      <ButtonGroup>
        <NavLink exact to="/">
          <button type="reset">Cancel</button>
        </NavLink>
        <button type="submit">Submit</button>
      </ButtonGroup>
    </StyledForm>
  )
  /* function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const newReview = {
      title: form.title.value,
      rating: form.rating.value,
      category: form.category.value,
      subcategory: form.subcategory.value,
      summary: form.summary.value,
      lessons: form.lessons.value,
    }
    onSubmit(newReview)
    form.reset()
    history.push('/')
  } */
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
