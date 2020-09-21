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
  background: var(--gradient-red);
  box-shadow: var(--shadow-red-50);
  font-size: 22pt;
  color: var(--main-white);
  font-weight: 900;
  padding: 20px;
  margin: 30px 40px 20px;
`
