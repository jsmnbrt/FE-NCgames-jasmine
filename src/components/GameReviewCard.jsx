import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { fetchReviewByID } from "../utils/api";

const GameReviewCard = () => {
  const [currentReview, setCurrentReview] = useState({});
  const { review_id } = useParams();

  useEffect(() => {
    fetchReviewByID(review_id)
      .then((data) => {
        setCurrentReview(data.review);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [review_id]);

  return (
    <>
      <li className="reviewCard">
        <h2>Title: {currentReview.title}</h2>
        <img
          id="gameImg"
          src={currentReview.review_img_url}
          alt={currentReview.title}
        />
        <p>Designer: {currentReview.designer}</p>
        <p>Category: {currentReview.category}</p>
        <p><em>{currentReview.review_body}</em></p>
        <p>Owner: {currentReview.owner}</p>
        <p>Votes: {currentReview.votes}</p>
      </li>
    </>
  );
};

export default GameReviewCard;
