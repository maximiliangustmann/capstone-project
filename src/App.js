import React, { useState } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom'
import Form from './components/Form'
import Dashboard from './pages/Dashboard'
import useReviews from './hooks/useReviews'

export default function App() {
  const { reviews, addReview, removeReview, editReview } = useReviews()
  const [editReviewState, setEditReviewState] = useState(undefined)
  const history = useHistory()
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

  function onEdit(id) {
    const editedReview = reviews.find((review) => review.id === id)
    setEditReviewState(editedReview)
    editReview(editedReview)
    history.push('/create')
  }
}
