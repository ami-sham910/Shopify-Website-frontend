import React from "react";
import "../App.css";
// import "./main.css";
import './Css file/main.css';
import laptop from "./Images/collage-image.webp";
import bulb from "./Images/bulb-1.webp";
import bulb2 from "./Images/bulb-2.webp";
import earbuds from "./Images/earbuds.webp";
import headphone from "./Images/headphone.webp";
import playbtn from "./Images/play.svg";
import arrow from "./Images/arrow.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="sale">
        <a href="img" target="blank">
          {" "}
          <img className="md-img" src={laptop}></img>{" "}
        </a>
        <h3 className="name">MS-6 Gen 2</h3>
        <h3 className="about name">
          Shop the Best Laptops Now! <br />
          <span className="about-2">
            Pair text with an icon <br /> to focus on your store's features
          </span>
        </h3>
        <button className="btn btn-1 ">Shop Now</button>
      </div>
      <div className="sale-2">
        <a className="images-link" href="a" target="blank">
          {" "}
          <img className="img-2 images" src={bulb}></img>
          <img className="img-3 images" src={bulb2}></img>
        </a>
        <p className="offer">Sale</p>
        <h3 className="name1"> Bulb Brand Name </h3>
        <p className="name-2">
          <span className="deal">$500</span>
          <span className="deal-offer">From $200</span>
          <span className="rating">**** (1)</span>
        </p>
        <div className="coulor">
          <button className="c-1 c-btn"></button>
          <button className="c-2 c-btn"></button>
          <button className="c-3 c-btn"></button>
        </div>
        <div className="timer">
          <div className="days  time">01</div> <hr />
          <div className="Hours time">01</div> <hr />
          <div className="Min time">01</div> <hr />
          <div className="sec time">01</div>
        </div>
      </div>
      <div className="sale-produuct">
        <div className="headphones">
          <a href="image">
            {" "}
            <img className="head-img" src={headphone}></img>
          </a>{" "}
        </div>
        <div className="h-about">
          <a href="play">
            {" "}
            <img src={playbtn}></img> <p>Play Now</p>{" "}
          </a>
        </div>
        <div className="earbuds">
          <a href="image">
            <img className="head-img" src={earbuds}></img>
          </a>
        </div>
        <div className="h2-about">
          <h2 className="top">Explore New Earbuds</h2>
          <h2 className="bottom">
            New Arrival <img src={arrow}></img>
          </h2>
        </div>
      </div>
    </div>
  );
}
