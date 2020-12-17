import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className="container">
        <div className="nav-columns">
          {/* Left Column Menu */}
          <div className="nav-column">
            <div className="nav-label">Menu</div>
            <ul className="nav-links">
              <li>
                <NavLink exact to="/case-studies">
                  Case Studies
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/approach">
                  Approach
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/services">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/about-us">
                  About us
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="nav-column">
            <div className="nav-label">Contact</div>
            <div className="nav-infos">
              {/* Email */}
              <ul className="nav-info">
                <li className="nav-info-label">Email</li>
                <li>
                  <NavLink exact to="/contact">
                    Get in touch with us
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to="/audit">
                    Get a free audit
                  </NavLink>
                </li>
              </ul>

              {/* Headquarters */}
              <ul className="nav-info">
                <li className="nav-info-label">Headquarters</li>
                <li>Route du Jura 49</li>
                <li>1700 Fribourg</li>
                <li>Switzerland</li>
              </ul>

              {/* Phone */}
              <ul className="nav-info">
                <li className="nav-info-label">Phone</li>
                <li>+41 (0) 75 510 28 70</li>
              </ul>

              {/* Legal */}
              <ul className="nav-info">
                <li className="nav-info-label">Legal</li>
                <li>Privacy and Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
