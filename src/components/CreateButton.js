import React from 'react'
import { NavLink } from 'react-router-dom'

export default function CreateButton() {
  return (
    <NavLink to="/create">
      <button>Create new review</button>
    </NavLink>
  )
}
