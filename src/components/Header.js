import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Home } from '../img/home.svg'
import { ReactComponent as Add } from '../img/add.svg'

export default function Header() {
  return (
    <HeaderWrapper>
      <NavLink exakt to="/" data-cy="homebutton">
        <HomeIcon />
      </NavLink>
      <NavLink exakt to="/create" data-cy="addbutton">
        <AddIcon />
      </NavLink>
    </HeaderWrapper>
  )
}

const HomeIcon = styled(Home)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`

const AddIcon = styled(Add)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`
