import React from 'react'
import CreateButton from '../components/CreateButton'
import NavIcons from '../components/NavIcons'
import PropTypes from 'prop-types'

Dashboard.propTypes = {
  activeFilter: PropTypes.func,
}

export default function Dashboard({ activeFilter }) {
  return (
    <>
      <CreateButton />
      <NavIcons activeFilter={activeFilter} />
    </>
  )
}
