import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom/cjs/react-router-dom";

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SearchBar from "./SearchBar";
import DropDown from "./DropDown";
import SideDrawer from "./SideDrawer";
import BackDrop from "../../../Assets/Styles/BackDrop";
import "./ManiNavigation.css";

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const OpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const CloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <BackDrop onClick={CloseDrawer} />}
      
        <SideDrawer show={drawerIsOpen}>
          <nav className="mani-navigation__drawer-nav">
            <NavLinks />
            <SearchBar />
            <div className="main-navigation__mobile-icons">
            <NavLink to="/kosarica" className="main-navigation__search-icons">
              <FontAwesomeIcon icon={faCartShopping} />
            </NavLink>
            <DropDown />
            </div>
          </nav>
        </SideDrawer>
      <MainHeader>
        <button className="main-navigation__menu-btn" onClick={OpenDrawer}>
          <span />
          <span />
          <span />
        </button>
        <div className="main-navigation__logo">
          <Link to="/">
            <img
              src="https://deadizajn.hr/wp-content/uploads/2022/05/cropped-andrea-logo-bez-okvira.png"
              alt="Dea Dizajn"
              className="main-navigation__img"
            />
          </Link>
        </div>
        <nav className="main-navigation__header-nav">
          <NavLinks />
        </nav>
        <div className="main-navigation__search">
          <div className="main-navigation__search-bar">
            <SearchBar />
          </div>
          <NavLink to="/kosarica" className="main-navigation__search-icons">
            <FontAwesomeIcon icon={faCartShopping} />
          </NavLink>
          <DropDown />
        </div>
      </MainHeader>
    </React.Fragment>
  );
};

export default MainNavigation;
