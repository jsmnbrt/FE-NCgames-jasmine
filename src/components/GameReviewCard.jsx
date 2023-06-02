import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

const GameReviewCard = ({
  title,
  designer,
  category,
  review_img_url,
  owner,
}) => {
  const { review_id } = useParams();
  return (
    <>
      <Link to={`/reviews/${review_id}`}>
        <li className="reviewCard">
          <p>Title: {title}</p>
          <p>Designer: {designer}</p>
          <p>Category: {category}</p>
          <img id="gameImg" src={review_img_url} alt={title} />
          <p>Owner: {owner}</p>
          <p>Votes: {votes}</p>
        </li>
      </Link>
    </>
  );
};

export default GameReviewCard;
