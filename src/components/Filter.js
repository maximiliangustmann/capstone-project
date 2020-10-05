import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Filter.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  active: PropTypes.string,
  activeFilter: PropTypes.func,
}

export default function Filter({ filters, active, activeFilter }) {
  return (
    <FilterBarWrapper>
      <FilterBar data-cy="filterbar">
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            active={active === filter}
            onClick={() => activeFilter(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterBar>
    </FilterBarWrapper>
  )
}

const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
  padding: 5px;
  border-radius: 50px;
  justify-content: space-evenly;
  align-content: center;
  position: fixed;
  bottom: 0;
  background: var(--gradient-black);
  box-shadow: var(--shadow-green);
  border: 2px solid var(--main-green);
`

const FilterButton = styled.button`
  border: 2px solid var(--main-green);
  background: ${({ active }) =>
    active ? 'var(--main-green)' : 'var(--main-white)'};
  border-radius: 20px;
  margin: 10px 5px;
  color: var(--main-black);
  font-weight: 300;
  font-size: 1em;
`

const FilterBarWrapper = styled.div`
  display: flex;
  @media (min-width: 574px) {
    justify-content: center;
  }
`
