import React from "react";

const Categories = ({ categories, categorize }) => {
  return (
    <div>
      {categories.map((category, index) => (
        <button key={index} onClick={() => categorize(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
