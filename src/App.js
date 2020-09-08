import React, { useState } from 'react'
import { BrowserRouter as Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import CreateForm from './components/CreateForm'

export default function App() {
  const [reviews, setReviews] = useState([])
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard reviews={reviews} />
      </Route>
      <Route path="/create">
        <CreateForm onSubmit={addReview} />
      </Route>
    </Switch>
  )
  function addReview(newReview) {
    setReviews([...reviews, newReview])
  }
}
