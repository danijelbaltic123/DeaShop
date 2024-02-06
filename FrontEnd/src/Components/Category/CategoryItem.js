import React from "react";
import { Link } from "react-router-dom";

import Card from "../../Assets/Styles/Card";
import CategroyImage from "./CategoryImage";
import "./CategoryItem.css";

const CategroyItem = (props) => {
  return (
    <li className="category-item">
      <Link to={`/${props.id}/kategorije`}>
        <div className="category-item__info">
          <h2>{props.name}</h2>
        </div>
        <Card className="category-item__content">
          <div className="category-item__image">
            <CategroyImage image={props.image} alt={props.name} />
          </div>
        </Card>
      </Link>
    </li>
  );
};

export default CategroyItem;
