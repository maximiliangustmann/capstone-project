import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ filters, active, activeFilter }) {
  return (
    <FilterBar>
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
  )
}

const FilterBar = styled.div`
  grid-row: 3;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
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
  font-size: 16px;
`
