import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container flex">
        <h1 className="logo">Zeus</h1>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html">About</a>
          </li>
          <li>
            <a href="index.html">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
