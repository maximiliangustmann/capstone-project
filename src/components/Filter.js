import React from 'react'
import styled from 'styled-components/macro'

export default function Filter({ filters, active, activeFilter }) {
  return (
    <ButtonWrapper>
      {filters.map((filter) => (
        <FilterButton
          key={filter}
          active={active === filter}
          onClick={() => activeFilter(filter)}
        >
          {filter}
        </FilterButton>
      ))}
    </ButtonWrapper>
  )
}

const ButtonWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 43px 20px 43px;
  justify-content: space-evenly;
`

const FilterButton = styled.button`
  border: 2px solid var(--main-green);
  background: ${({ active }) =>
    active ? 'var(--main-green)' : 'var(--main-white)'};
  border-radius: 20px;
  margin: 20px 5px 0 5px;
  color: var(--main-black);
  font-weight: 300;
  font-size: 16px;
`
