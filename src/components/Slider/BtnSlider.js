import React from "react";
import "./Slider.css";
import leftArrow from "./icons/La.png";
import rightArrow from "./icons/Ra.png";

export default function BtnSlider(props) {
  return (
    <button onClick={props.move} className={props.direction === "next" ? 'btn-slide next' : 'btn-slide prev'}>


      <img src={props.direction === "next" ? rightArrow : leftArrow} alt="damn" />


    </button>
  );
}