import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer bg-dark py-5">
      <div className="container grid grid-3">
        <div>
          <h1>Zeus</h1>
          <p>Copyright &copy; 2021</p>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/features">Features</a>
            </li>
            <li>
              <a href="/docs">Docs</a>
            </li>
          </ul>
        </nav>
        <div className="social">
          <a href="">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-facebook fa-2x"></i>
          </a>
          <a href="">
            <i className="fab fa-instagram fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
