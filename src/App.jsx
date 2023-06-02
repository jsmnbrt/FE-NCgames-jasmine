import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import "./App.css";
import GameReviewCard from "./components/GameReviewCard";

const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="App">
        <Routes>
          <Route path="/reviews" element={<ReviewList />} />
          <Route path="/reviews/:review_id" element={<GameReviewCard />} />
        </Routes>
      </div>
    </>
  );
};

export default App;


