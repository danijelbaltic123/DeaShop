import React from "react";

import "./CategoryImage.css"

const CategroyImage = (props) => {
  return (
    <div className={`category-image ${props.clasName}`}>
      <img
        src={props.image}
        alt={props.name}
        style={{ width: props.width, height: props.height }}
      />
    </div>
  );
};

export default CategroyImage;
