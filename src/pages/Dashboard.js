import React from 'react'
import CreateButton from '../components/CreateButton'
import NavIcons from '../components/NavIcons'
import PropTypes from 'prop-types'
import styled from 'styled-components'

Dashboard.propTypes = {
  activeFilter: PropTypes.func,
}

export default function Dashboard({ activeFilter }) {
  return (
    <DashboardWrapper>
      <CreateButton />
      <NavIcons activeFilter={activeFilter} />
    </DashboardWrapper>
  )
}

const DashboardWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
