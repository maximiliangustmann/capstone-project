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
  background: linear-gradient(
    90deg,
    rgba(241, 61, 60, 1),
    rgba(121, 31, 30, 1)
  );
  box-shadow: 0 0 50px -10px #f13d3c;
  font-size: 22px;
  color: #f4f4f4;
  font-weight: 900;
  padding: 20px;
  margin: 40px;
`
