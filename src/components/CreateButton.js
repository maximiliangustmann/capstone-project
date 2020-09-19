import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function CreateButton() {
  return (
    <StyledNavLink to="/create">
      <Button>Create new review</Button>
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`

const Button = styled.button`
  border-radius: 50px;
  border: none;
  background: linear-gradient(
    90deg,
    rgba(241, 61, 60, 1),
    rgba(121, 31, 30, 1)
  );
  box-shadow: 0 0 50px #f13d3c80;
  font-size: 22pt;
  color: #f4f4f4;
  font-weight: 900;
  padding: 20px;
  margin: 30px 40px 20px;
`
