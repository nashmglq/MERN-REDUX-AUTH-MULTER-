import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header >
      <Link to="/home" class = "text-decoration-none"> 
        <h1>GymBoylol</h1>
      </Link>
    </header>
  );
};

export default Navbar;
