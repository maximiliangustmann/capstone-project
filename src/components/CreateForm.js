import React from 'react'
import styled from 'styled-components/macro'

export default function CreateForm() {
  return (
    <Form>
      <label>
        Title
        <Input />
      </label>
      <label>
        Rating
        <Input />
      </label>
      <label>
        Categorie
        <Input />
      </label>
      <label>
        Subcategorie
        <Input />
      </label>
      <label>
        Summary
        <Input />
      </label>
      <label>
        Lesson
        <Input />
      </label>
      <ButtonGroup>
        <button>Cancel</button>
        <button type="submit">Submit</button>
      </ButtonGroup>
    </Form>
  )
}

const Form = styled.form`
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
