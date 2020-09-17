import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export default function useReviews() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem('savedReview')) || []
  )
  const [editReviewState, setEditReviewState] = useState(undefined)
  const history = useHistory()

  useEffect(() => {
    localStorage.setItem('savedReview', JSON.stringify(reviews))
  }, [reviews])

  function addReview(newReview) {
    setReviews([...reviews, newReview])
  }

  function removeReview(id) {
    const index = reviews.findIndex((review) => review.id === id)
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)])
  }

  function editReview(editedReview) {
    const index = reviews.findIndex((review) => review.id === editedReview.id)
    setReviews([
      ...reviews.slice(0, index),
      editedReview,
      ...reviews.slice(index + 1),
    ])
  }

  function onEdit(id) {
    const editedReview = reviews.find((review) => review.id === id)
    setEditReviewState(editedReview)
    editReview(editedReview)
    history.push('/create')
  }

  return {
    reviews,
    editReviewState,
    setEditReviewState,
    addReview,
    removeReview,
    editReview,
    onEdit,
  }
}
