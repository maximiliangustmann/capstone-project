import { useState, useEffect } from 'react'

export default function useReviews() {
  const [reviews, setReviews] = useState(
    JSON.parse(localStorage.getItem('savedReview')) || []
  )

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

  return { reviews, addReview, removeReview, editReview }
}
