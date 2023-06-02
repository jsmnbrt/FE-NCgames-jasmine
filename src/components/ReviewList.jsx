import GameReviewCard from "./GameReviewCard";
import axios from "axios";
import React, { useState, useEffect } from "react";
import fetchReviews from "../utils/api";

function ReviewList() {
  const [reviews, setReviews] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchReviews()
      .then((data) => {
        setReviews(data[0].reviews);
        setIsLoading(false);
        {
        }
      })

      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <p>...Loading... this could take a while!</p>;
  }

  return (
    <div>
      {reviews.map((review) => (
        <div key={reviews.review_id}>
          <h3>{review.title}</h3>
          <img src={review.review_img_url} alt={review.title} />
          <p>Category: {review.category}</p>
          <p>Comments: {review.comment_count}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
