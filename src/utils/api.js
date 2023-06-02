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

export function fetchReviewByID(review_id) {
  return gameReviewAPI.get(`/reviews/${review_id}`).then((res) => {
    return res.data;
  });
}
