import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Form from './components/Form'

export default function App() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem('savedReview')) || []
  )
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard reviews={reviews} onClick={() => handleRemove(reviews)} />
      </Route>
      <Route path="/create">
        <Form onSubmit={addReview} />
      </Route>
    </Switch>
  )
  function addReview(newReview) {
    setReviews([...reviews, newReview])
    localStorage.setItem('savedReview', JSON.stringify([...reviews, newReview]))
  }
  function handleRemove(reviews) {
    console.log(reviews)
    const index = reviews.findIndex((review) => review.title)
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)])
  }
}
