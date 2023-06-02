import GameReviewCard from "./GameReviewCard";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchReviews } from "../utils/api";

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
    <ul >
      {reviews.map((review) => (
        <Link to={`/reviews/${review.review_id}`}>
          <li key={reviews.review_id} className="reviewCard">
            <h2>{review.title}</h2>
            <img src={review.review_img_url} alt={review.title} />
            <p>Category: {review.category}</p>
            <p>Comments: {review.comment_count}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}

export default ReviewList;
