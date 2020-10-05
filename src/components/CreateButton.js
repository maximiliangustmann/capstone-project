import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function CreateButton() {
  return (
    <StyledNavLink data-cy="create" to="/create">
      Create new review
    </StyledNavLink>
  )
}

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border-radius: 50px;
  border: none;
  background: var(--gradient-red);
  box-shadow: var(--shadow-red-30);
  font-size: 1.375em;
  color: var(--main-white);
  font-weight: 900;
  padding: 20px;
  margin: 75px 40px 20px;
`
