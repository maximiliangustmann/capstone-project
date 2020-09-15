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

  function removeReview(title) {
    console.log(reviews)
    const index = reviews.findIndex((review) => review.title === title)
    setReviews([...reviews.slice(0, index), ...reviews.slice(index + 1)])
  }
  return { reviews, addReview, removeReview }
}
