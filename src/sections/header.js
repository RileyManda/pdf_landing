import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";
import { FaSearch, FaCaretDown, FaUserCircle } from "react-icons/fa";
import "./../css/header.css";

class Header extends Component {
  searchTrigger() {
    document.querySelector("body").classList.add("search-open");
  }
  menuTrigger() {
    document.querySelector("body").classList.add("mobile-menu-open");
  }
  closeMenuTrigger() {
    document.querySelector("body").classList.remove("mobile-menu-open");
  }
  render() {
    const { headerStyle } = this.props;

    var elements = document.querySelectorAll(".has-childmenu > a");
    for (var i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function() {
          this.parentElement
            .querySelector(".submenu")
            .classList.toggle("active");
          this.classList.toggle("open");
        };
      }
    }
    const style = {
      backgroundColor: "#273167",
      color: "white",
    };

    return (
      <header className={`header ${headerStyle}`}>
        <div id="mainNav" className="axsis-main-menu-area header--fixed">
          <div className="container">
            <div className="row m-0 align-items-center">
              <div className="col-lg-2 p-0 d-flex justify-content-between align-items-center">
                <div className="logo">
                  <Link className="navbar-brand navbar-brand1" to="/#">
                    <img src="assets/images/logo.png" alt="logo" />
                  </Link>
                  <Link className="navbar-brand navbar-brand2" to="/#">
                    <img src="assets/images/footer-logo.png" alt="logo" />
                  </Link>
                </div>
                <div className="menu-bar d-lg-none" onClick={this.menuTrigger}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="op-mobile-menu col-lg-10 p-0 d-lg-flex align-items-center justify-content-end">
                <div className="m-menu-header d-flex justify-content-between align-items-center d-lg-none">
                  <Link to="/#" className="logo">
                    <img src="assets/images/logo.png" alt="logo" />
                  </Link>
                  <span
                    className="close-button"
                    onClick={this.closeMenuTrigger}
                  >
                    <span />
                    <span />
                    <span />
                  </span>
                </div>
                <Scrollspy
                  className="custom-border-top nav-menu d-lg-flex flex-wrap list-unstyled mr_lg--50  mb-0 justify-content-center"
                  items={[
                    "home",
                    "feature",
                    "screenshot",
                    "pricing",
                    "testimonial",
                    "blog",
                    "contact",
                  ]}
                  currentClassName="is-current"
                  offset={-200}
                >
                  <li>
                    <a href="/#home">
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="has-childmenu">
                    <Link to="#">
                      Publications
                      <FaCaretDown />
                    </Link>
                    <ul className="submenu">
                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/fiction"
                        >
                          Fiction
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/education"
                        >
                          Educational
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/drama"
                        >
                          Drama
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/politics"
                        >
                          Politics
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/research"
                        >
                          Research
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/architecture"
                        >
                          Architecture
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          activeStyle={style}
                          onClick={this.closeMenuTrigger}
                          to="/motivation"
                        >
                          Motivational
                        </NavLink>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="/#feature">
                      <span>Why OPC</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#screenshot">
                      <span>Features</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#pricing">
                      <span>Pricing</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#testimonial">
                      <span>Testimonial</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#blog">
                      <span>Blog</span>
                    </a>
                  </li>
                  <li>
                    <a href="/#contact">
                      <span>Contact</span>
                    </a>
                  </li>

                  <li>
                    <a href="/#signin">
                      <FaUserCircle />
                    </a>
                  </li>

                  <li className="search-option" onClick={this.searchTrigger}>
                    <FaSearch />
                  </li>
                </Scrollspy>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
