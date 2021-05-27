import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar  bg-light navbar-expand-lg ">
          <div className="container-fluid">
            <NavLink
              className="navbar-brand"
              to="#"
              exact
              activeClassName="active-nav"
            >
              <img
                className="nav-logo"
                src="https://res.cloudinary.com/rohit872cloud/image/upload/v1622038013/StudentManager/logo_vkr8h4.png"
                alt=""
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink
                    className="nav-link "
                    to="/"
                    exact
                    activeStyle={{ color: "red", textDecoration: "underline" }}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/add-student"
                    activeStyle={{ color: "red", textDecoration: "underline" }}
                  >
                    Add Student
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/get-students"
                    activeStyle={{ color: "red", textDecoration: "underline" }}
                  >
                    Students
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
