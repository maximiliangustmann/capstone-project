import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Home } from '../img/home.svg'

export default function HomeButton() {
  return (
    <StyledNavLink exakt to="/" data-cy="homebutton">
      <HomeIcon />
    </StyledNavLink>
  )
}

const HomeIcon = styled(Home)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`

const StyledNavLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  grid-row: 1;
`
