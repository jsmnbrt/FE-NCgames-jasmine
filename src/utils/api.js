import axios from "axios";

const gameReviewAPI = axios.create({
  baseURL: "https://jasmines-nc-games.onrender.com/api",
});

export function fetchReviews() {
  return gameReviewAPI
    .get("/reviews", {})
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log("Error fetching reviews", err);
    });
}

<<<<<<< HEAD
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
=======
export function fetchReviewByID(review_id) {
  return gameReviewAPI.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
}
>>>>>>> 6cc3952f5d937b80cde9cc1d35879dbc0dee9a88
