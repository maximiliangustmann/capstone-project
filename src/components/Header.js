import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components/macro'
import { ReactComponent as Home } from '../img/home.svg'
import { ReactComponent as Add } from '../img/add.svg'
import SortButton from './SortButton'
import PropTypes from 'prop-types'

Header.propTypes = {
  sortBySubcategory: PropTypes.func,
  sortByRating: PropTypes.func,
}

export default function Header({ sortBySubcategory, sortByRating }) {
  return (
    <HeaderWrapper>
      <NavLink exact to="/" data-cy="homebutton">
        <HomeIcon />
      </NavLink>
      <NavLink to="/create" data-cy="addbutton">
        <AddIcon data-cy="add-icon" />
      </NavLink>
      <SortButton
        sortBySubcategory={sortBySubcategory}
        sortByRating={sortByRating}
      />
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
  margin-top: 20px;
`
