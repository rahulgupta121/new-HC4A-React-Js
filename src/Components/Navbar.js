import React from "react";
import hc4alogo from "../logos/HC4A-logo.png";
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  NavLink,
} from "react-router-dom";
import ContactUs from "./NavbarPages/ContactUs";
import Donate from "./NavbarPages/Donate"; 


//import $ from 'jquery'
const Navbar = () => {
  
  const fixedText = document.getElementsByClassName("Mynavbar"); 
  const [headerText, setHeaderText] = useState();
  useEffect(() => {
    // console.log("i am use effect")
    const header = document.getElementById("Mynavbar");
    const sticky = header.offsetTop;
    const scrollCallBack = window.addEventListener("scroll", () => {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
        if (headerText !== fixedText) {
          setHeaderText(fixedText);
        }
      } else {
        header.classList.remove("sticky");
      }
    });
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };        
  });



  const imgclick = () => {
    var x = document.getElementById("img-clicked");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none !important";
    }
  };

  return (
    <>
      <Router>
        {/* div#Mynavbar .navbar-button-div .hc4a-logo-md-div .navbar-main .navbar-main-div ul*/}
        <div id="Mynavbar" className="Mynavbar">
          <div className=" container d-flex navbar-button-div justify-content-center position-relative">

            <div className="hc4a-logo-md-div" id="img-clicked" href="/">
              <img className="HC4A-logo-md" src={hc4alogo} alt="" />
            </div>

            <nav className="navbar-main navbar-expand-lg navbar-button navbar-light bg-white">
              <button
                className="navbar-toggler"
                onClick={imgclick}
                type="button"
                data-toggle="collapse"
                data-target="#navbarScroll"
                aria-controls="navbarScroll"
                aria-expanded="true"
                aria-label="Toggle navigation"
              > 
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-main-div navbar-collapse"
                id="navbarScroll"
              >
                <ul
                  className="navbar-nav navbar-ul-list mr-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="home nav-item active navbar-li-list">
                    <a to="/contact" className="nav-link" href="#/contact">
                      {" "}
                      HOME <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="about-us navbar-li-list nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      ABOUT US
                    </a>
                    <ul
                      className="dropdown-menu nav-dropdown-border"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbar-li-list">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      EVENTS
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbar-li-list">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      GROW THE MOVEMENTS
                    </a>
                    <ul
                      className="dropdown-menu grow-the-moment"
                      aria-labelledby="navbarScrollingDropdown"
                    >
                      <li>
                        <a className="dropdown-item" href="#/">
                          Action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div className="HC4A-logo position-relative">
                    <img className="HC4A-logo" src={hc4alogo} alt="" />
                  </div>
                  <li className="nav-item dropdown navbar-li-list">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      PROGRAMES
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    > 
                      <li>
                        <a className="dropdown-item" href="#/">
                          Another action
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#/">
                          Something else here
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown navbar-li-list">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#/"
                      id="navbarScrollingDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-expanded="false"
                    >
                      STORYS
                    </a>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarScrollingDropdown"
                    > 
                      <li>
                        <a className="dropdown-item" href="#/">
                         About Story 
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item active navbar-li-list">
                    <NavLink
                      activeClassName="active_class"
                      to="/contactus"
                      className="contact-us nav-link"
                      href="#/"
                    >
                      CONTACTS US <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <div className="navbar-donate-div ">
                    <NavLink to="/donate">
                      <button
                        type="button"
                        className="btn btn-danger navbar-donate-btn"
                      >
                        {" "}
                        DONATE{" "}
                      </button>
                    </NavLink>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
        </div>

        <div>
          <Switch>
            <Route
              exact
              path="/ContactUs"
              component={"./NavbarPages/ContactUs.js"}
              pattern="/path1"
            >
              <ContactUs />
            </Route>
            <Route
              exact
              path="/donate"
              component={"./NavbarPages/ContactUs.js"}
              pattern="/path1"
            >
              <Donate />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
};

export default Navbar;
