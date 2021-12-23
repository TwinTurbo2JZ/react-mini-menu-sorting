import React from "react";

import Card from "./Card";

const Cards = ({ data }) => {
  return (
    <div>
      <h3>Cards Component</h3>
      {data.map((dataInd) => (
        <Card key={dataInd.id} {...dataInd} />
      ))}
    </div>
  );
};

export default Cards;
