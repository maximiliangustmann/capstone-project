import React from 'react'
import styled from 'styled-components/macro'

export default function CreateForm() {
  return (
    <Form>
      <label>
        Title
        <Input></Input>
      </label>
      <label>
        Rating
        <Input></Input>
      </label>
      <label>
        Categorie
        <Input></Input>
      </label>
      <label>
        Subcategorie
        <Input></Input>
      </label>
      <label>
        Summary
        <Input></Input>
      </label>
      <label>
        Lesson
        <Input></Input>
      </label>
    </Form>
  )
}

const Form = styled.form`
  display: grid;
  gap: 20px;
  border: 2px solid black;
  margin: 20px;
  padding: 20px;
`
const Input = styled.input`
  margin: 0 20px;
`
