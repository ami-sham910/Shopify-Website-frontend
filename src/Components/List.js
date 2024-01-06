import React from "react";
import './Css file/list.css';
import earbuds from "./Images/ear1.webp";
import heaphone from "./Images/ear2.webp";
import vr from "./Images/vr1.webp";
import vr2 from "./Images/vr2.webp";
import vr3 from "./Images/vr3.webp";
import vr4 from "./Images/vr4.webp";
import vr5 from "./Images/vr5.webp";

export default function List() {
  return (
    <div>
      <div className="list-item">
        <div className="img imgs-1">
          <img className="images" src={earbuds}></img>
          <p className="class-name">New Earbuds</p>
        </div>
        <div className="img imgs-2">
          <img className="images" src={heaphone}></img>
          <p className="class-name">New Headphone</p>
        </div>
        <div className="img imgs-3">
          <img className="images" src={vr}></img>
          <p className="class-name">New VR Gaming</p>
        </div>
        <div className="img imgs-4">
          <img className="images" src={vr2}></img>
          <p className="class-name">New Gaming Keyboard</p>
        </div>
        <div className="img imgs-5">
          <img className="images" src={vr3}></img>
          <p className="class-name">New Headphone</p>
        </div>
      </div>
    </div>
  );
}
