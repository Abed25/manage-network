import React from "react";
import "../css/Card.css";

export default function Card(props) {
  const { title, content } = props;
  return (
    <div className="cardContainer">
      <h4>{title}</h4>
      <label>{content}</label>
    </div>
  );
}
