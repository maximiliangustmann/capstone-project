import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Form from './components/Form'
import Dashboard from './pages/Dashboard'
import useReviews from './hooks/useReviews'
import Reviews from './pages/Reviews'
import useFilters from './hooks/useFilters'

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
  const { filters, active, setActive, activeFilter } = useFilters()

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
      <Route path="/reviews">
        <Reviews
          reviews={reviews}
          onRemove={removeReview}
          onEdit={onEdit}
          active={active}
          setActive={setActive}
          filters={filters}
          activeFilter={activeFilter}
        />
      </Route>
    </Switch>
  )
}
