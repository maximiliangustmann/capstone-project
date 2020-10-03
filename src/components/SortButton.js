import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Sort } from '../img/sort.svg'
import PropTypes from 'prop-types'

SortButton.propTypes = {
  sortBySubcategory: PropTypes.func,
  sortByRating: PropTypes.func,
}

export default function SortButton({ sortBySubcategory, sortByRating }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <SortButtonWrapper>
      <SortIcon onClick={() => setShowMenu(!showMenu)} data-cy="sort-icon" />
      {showMenu && (
        <ButtonWrapper>
          <Button
            onClick={() => sortBySubcategory()}
            data-cy="sort-subcategory"
          >
            Subcategory
          </Button>
          <Button onClick={() => sortByRating()} data-cy="sort-rating">
            Rating
          </Button>
        </ButtonWrapper>
      )}
    </SortButtonWrapper>
  )
}

const SortIcon = styled(Sort)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`

const SortButtonWrapper = styled.div`
  display: flex;
`

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const Button = styled.button`
  border: 2px solid var(--main-green);
  background: var(--main-white);
  border-radius: 20px;
  margin: 10px 5px;
  color: var(--main-black);
  font-weight: 300;
  font-size: 16px;
`
