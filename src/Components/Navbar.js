import React from "react";
// import "../App.css";
// import "./Nav.css";
import './Css file/Nav.css';
import cart from "./Images/cart.svg";
import search from "./Images/search.svg";
import user from "./Images/user.svg";

export default function Navbar() {
  return (
    <>
      <div id="Nav">
        <div className="logo">
          <h3>
            <a href="#home">Logo</a>
          </h3>
        </div>
        <nav className="navBar">
          <ul>
            <li className="navList">
              <a href="#home">Home</a>
            </li>
            <li class="dropdown navList">
              <a href="#">Store &#9662;</a>
              <ul class="dropdown-content">
                <li className="navList-1 content">
                  <a href="#"> Computer Acc</a>
                </li>
                <li className="navList-1">
                  <a href="#">Laptop</a>
                </li>
                <li className="navList-1">
                  <a href="#">Desktops</a>
                </li>
                <li className="navList-1">
                  <a href="#">Monitore</a>
                </li>
                <li className="navList-1">
                  <a href="#">Keyboard & Mouse</a>
                </li>
                <li className="navList-1">
                  <a href="#">External Hard Drive</a>
                </li>
                <li className="navList-1">
                  <a href="#">Laptop Bag & Cases</a>
                </li>
              </ul>
            </li>{" "}
            <li className="navList">
              <a href="#home">Computer</a>
            </li>{" "}
            <li className="navList">
              <a href="#home">Phone</a>
            </li>{" "}
            <li className="navList">
              <a href="#home">Gaming</a>
            </li>
            <li className="navList">
              <a href="#home">Explore</a>
            </li>
          </ul>
        </nav>
        <div className="search">
          <div className="searchBtn sm-btn">
            {/* <a href="search">
              {" "} */}
              <img src={search} alt="heal"></img>
            {/* </a> */}
          </div>
          <div className="cartBtn sm-btn">
            {/* <a href="search">
              {" "} */}
              <img src={cart} alt="heal"></img>
            {/* </a> */}
          </div>
          <div className="userBtn sm-btn">
            {/* <a href="search">
              {" "} */}
              <img src={user} alt="heal"></img>
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
