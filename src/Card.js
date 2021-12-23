import React from "react";
import styles from "./css/Card.module.css";

const Card = ({ title, category, price, img, desc }) => {
  return (
    <div>
      <h2>{title}</h2>
      <img src={img} alt="image-is-here" />
      <h3>{desc}</h3>
      <h4>{category}</h4>
      <h4>{price}</h4>
    </div>
  );
};

export default Card;
