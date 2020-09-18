import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function CreateButton() {
  return (
    <NavLink to="/create">
      <Button>Create new review</Button>
    </NavLink>
  )
}

const Button = styled.button`
  border-radius: 50px;
  border: none;
`
