import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="NavBar">
        <h1>Find your next family argument!</h1>
        <Link to="/reviews">
          <button>All Games</button>
        </Link>
      </div>
    </>
  );
};

export default NavBar;
