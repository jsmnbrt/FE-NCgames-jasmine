import React from "react";
import { Route, Routes, Link } from "react-router-dom";

import ReviewList from "./components/ReviewList";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <Header></Header>
      <div className="App">
        <Routes>
          <Route path="/reviews" element={<ReviewList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
