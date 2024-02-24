import React, { useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faPlusSquare,
  faSignIn,
  faSignOutAlt,
  faUserCircle,
  faUserEdit,
  faUserPlus,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { CSSTransition } from "react-transition-group";

import "./DropDown.css";

const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="drop-down">
      <button
        onClick={togleMenu}
        className={`drop-down__btn ${isOpen ? "active" : ""}`}
      >
        <FontAwesomeIcon icon={faUserCircle} />
      </button>
        <CSSTransition
          in={isOpen}
          timeout={400}
          classNames="slide-in-left"
          mountOnEnter
          unmountOnExit
        >
          <ul className="drop-down__list">
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faSignIn} />
                <span>Login</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faUserPlus} />
                <span> Register</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faSignOutAlt} />
                <span>Logout</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faUserEdit} />
                <span>Your Profile</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faUsers} />
                <span>All Users</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faPlusSquare} />
                <span>Add New Product</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/prijava" className="drop-down__item">
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Add New Category</span>
              </NavLink>
            </li>
          </ul>
        </CSSTransition>
    </div>
  );
};

export default DropDown;
