import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Naslovna
        </NavLink>
      </li>
      <li>
        <NavLink to="/trgovina">Trgovina</NavLink>
      </li>
      <li>
        <NavLink to="/kontakt">Kontakt</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
