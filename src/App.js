import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import Dashboard from './pages/Dashboard'
import useReviews from './hooks/useReviews'

export default function App() {
  const {
    reviews,
    editReviewState,
    setEditReviewState,
    addReview,
    removeReview,
    editReview,
    onEdit,
  } = useReviews()

  return (
    <Switch>
      <Route exact path="/">
        <Dashboard reviews={reviews} onRemove={removeReview} onEdit={onEdit} />
      </Route>
      <Route path="/create">
        <Form
          onSubmit={addReview}
          editReview={editReview}
          editReviewState={editReviewState}
          setEditReviewState={setEditReviewState}
        />
      </Route>
    </Switch>
  )
}
