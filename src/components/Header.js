import { useState, useEffect, useRef, useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { gsap } from "gsap";

import { NavContext } from "../context/NavContext";
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";

const Header = ({ dimensions }) => {
  const history = useHistory();
  const timelineRef = useRef(gsap.timeline({ defaults: {} }));
  const [state, setState] = useState({ isMenuOpen: false });
  const { navRef } = useContext(NavContext);

  useEffect(() => {
    const unsubscribe = history.listen(({ pathname }) => {
      setState((prev) => ({ ...prev, isMenuOpen: false }));
    });

    return unsubscribe;
  }, [history]);

  useEffect(() => {
    if (state.isMenuOpen) {
      timelineRef.current
        .set(navRef.current, { display: "block" })
        .set(document.body, { overflow: "hidden" })
        .to(".App", {
          y: dimensions.innerWidth <= 654 ? "70vh" : dimensions.innerHeight / 2,
          ease: "Expo.easeInOut",
          duration: 1,
        })
        .to(
          ".hamburger-menu span",
          {
            scaleX: 0,
            transformOrigin: "50% 0%",
            ease: "Expo.easeInOut",
            duration: 0.6,
          },
          "-=1"
        )
        .to(
          "#Path_1",
          {
            strokeDashoffset: 10,
            strokeDasharray: 5,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          "#Path_2",
          {
            strokeDashoffset: 10,
            strokeDasharray: 20,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          "#Line_1",
          {
            strokeDashoffset: 40,
            strokeDasharray: 18,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          "#circle",
          {
            strokeDashoffset: 0,
            duration: 0.6,
          },
          "-=0.8"
        )
        .to(
          ".hanburger-menu-close",
          {
            display: "block",
            duration: 0.6,
          },
          "-=0.8"
        );
    } else {
      timelineRef.current
        .to(".App", {
          y: 0,
          ease: "Expo.easeInOut",
          duration: 1,
        })
        .to(
          "#circle",
          {
            strokeDashoffset: -193,
            strokeDasharray: 227,
            duration: 0.6,
          },
          "-=0.6"
        )
        .to(
          "#Path_1",
          {
            strokeDashoffset: 10,
            strokeDasharray: 10,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          "#Path_2",
          {
            strokeDashoffset: 10,
            strokeDasharray: 10,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          "#Line_1",
          {
            strokeDashoffset: 40,
            strokeDasharray: 40,
            duration: 0.4,
          },
          "-=0.6"
        )
        .to(
          ".hamburger-menu span",
          {
            scaleX: 1,
            transformOrigin: "50% 0%",
            ease: "Expo.easeInOut",
            duration: 0.6,
          },
          "-=0.6"
        )
        .set(".hanburger-menu-close", { display: "none" })
        .set(document.body, { overflow: "auto" })
        .set("nav", { display: "none" });
    }
  }, [state.isMenuOpen, navRef, dimensions]);

  return (
    <div className="header">
      <div className="container">
        <div className="row v-center space-between">
          {/* Logo */}
          <div className="logo">
            <NavLink exact to="/">
              AGENCY
            </NavLink>
          </div>

          {/* Hamburget Menu */}
          <div className="nav-toggle">
            {/* Open Menu */}
            <div
              onClick={() => setState((prev) => ({ ...prev, isMenuOpen: true }))}
              className="hamburger-menu"
            >
              <span></span>
              <span></span>
            </div>

            {/* Close Menu */}
            <div
              onClick={() => setState((prev) => ({ ...prev, isMenuOpen: false }))}
              className="hanburger-menu-close"
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
