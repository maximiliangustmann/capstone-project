import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Sort } from '../img/sort.svg'

export default function SortButton() {
  return <SortIcon />
}

const SortIcon = styled(Sort)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`
