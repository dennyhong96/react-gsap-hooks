import { NavLink, useHistory } from "react-router-dom";

import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          {/* Logo */}
          <div className="logo">
            <a href="/">AGENCY</a>
          </div>

          {/* Hamburget Menu */}
          <div className="nav-toggle">
            {/* Open Menu */}
            <div className="hamburger-menu">
              <span></span>
              <span></span>
            </div>

            {/* Close Menu */}
            <div className="hanburger-menu-close">
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
