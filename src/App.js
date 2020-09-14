import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import Dashboard from './pages/Dashboard'
import useReviews from './hooks/useReviews'

export default function App() {
  const { reviews, addReview, removeReview } = useReviews()
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard reviews={reviews} onClick={removeReview} />
      </Route>
      <Route path="/create">
        <Form onSubmit={addReview} />
      </Route>
    </Switch>
  )
}
