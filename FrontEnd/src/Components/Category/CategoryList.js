import React from "react";

import CategoryItem from "./CategoryItem";
import "./CategoryList.css";

const CategroyList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>Nema zabilježenih kategorija!</h2>
      </div>
    );
  }
  return (
    <ul className="category-list">
      {props.items.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          image={category.image}
          name={category.name}
          productCount={category.products}
        />
      ))}
    </ul>
  );
};

export default CategroyList;
