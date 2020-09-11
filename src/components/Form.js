import React from 'react'
import styled from 'styled-components/macro'
import { NavLink, useHistory } from 'react-router-dom'

export default function Form({ onSubmit }) {
  const history = useHistory()
  return (
    <StyledForm onSubmit={handleSubmit}>
      <label>
        Title
        <Input autoFocus name="title" />
      </label>
      <label>
        Rating
        <Input name="rating" />
      </label>
      <label>
        Categorie
        <Input name="categorie" />
      </label>
      <label>
        Subcategorie
        <Input name="subcategorie" />
      </label>
      <label>
        Summary
        <Input name="summary" />
      </label>
      <label>
        Lessons
        <Input name="lessons" />
      </label>
      <ButtonGroup>
        <NavLink exact to="/">
          <button>Cancel</button>
        </NavLink>
        <button type="submit">Submit</button>
      </ButtonGroup>
    </StyledForm>
  )
  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const newReview = {
      title: form.title.value,
      rating: form.rating.value,
      categorie: form.categorie.value,
      subcategorie: form.subcategorie.value,
      summary: form.summary.value,
      lessons: form.lessons.value,
    }
    onSubmit(newReview)
    form.reset()
    history.push('/')
  }
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
