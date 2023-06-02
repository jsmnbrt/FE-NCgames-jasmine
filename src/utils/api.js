import axios from "axios";

const gameReviewAPI = axios.create({
  baseURL: "https://jasmines-nc-games.onrender.com/api",
});

function fetchReviews() {
  return gameReviewAPI
    .get("/reviews", {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error fetching reviews", err);
    });
}

export function fetchCommentByReviewID() {
  return gameReviewAPI
    .get("/reviews/:review_id/comments/:comment_id")
    .then((res) => {
    return res.data
    })
    .catch((err) => {
    console.log(err)
  })
}
export default fetchReviews;
