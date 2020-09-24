import React from 'react'
import CreateButton from '../components/CreateButton'
import NavIcons from '../components/NavIcons'

export default function Dashboard({ activeFilter }) {
  return (
    <>
      <CreateButton />
      <NavIcons activeFilter={activeFilter} />
    </>
  )
}
