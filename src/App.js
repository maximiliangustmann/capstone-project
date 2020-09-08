import React from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateForm from './components/CreateForm'

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/create">
        <CreateForm />
      </Route>
    </Switch>
  )
}
