import React, { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as Sort } from '../img/sort.svg'

export default function SortButton() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <SortIcon onClick={() => setShowMenu(!showMenu)} />
      {showMenu && (
        <div>
          <button>Subcategory</button>
          <button>Rating</button>
        </div>
      )}
    </>
  )
}

const SortIcon = styled(Sort)`
  fill: var(--main-red);
  height: 40px;
  width: 40px;
  margin: 20px;
`
