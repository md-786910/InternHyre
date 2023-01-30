import React from "react";
import { NavLink, Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <NavLink
          to="/"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h2 className="m-0 text-primary">
            <i className="fa fa-book me-3"></i>
            <i class="fa-solid fa-map-location-dot"></i>
            <strong>InternHyre</strong>
          </h2>
        </NavLink>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="naPvbarCollapse">
          <div className="navbar-nav ms-auto p-0 p-lg-0">
            <NavLink to="/" className="nav-item nav-link ">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item nav-link">
              About
            </NavLink>
            <NavLink to="/blog" className="nav-item nav-link">
              Blog
            </NavLink>
            <NavLink to="/course" className="nav-item nav-link">
              Courses
            </NavLink>

            <NavLink to="/contact" className="nav-item nav-link">
              Contact
            </NavLink>
            <NavLink to="/register" className="nav-item nav-link">
              Register
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link">
              Login
            </NavLink>
          </div>

          {/*
           <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
            >
            </button>

        */}
          <div
            className="ms-auto dropdown me-3"
            style={{
              textAlign: "right",
            }}
          >
            <div type="button" data-bs-toggle="dropdown">
              {" "}
              <img
                src={"./assets/images/user.jpg"}
                alt="user"
                className="border border-4 rounded-circle w-25 dropdown-toggle"
              />
            </div>
            <div className="dropdown-menu text-right">
              <Link to="/profile" className="dropdown-item">
                Profile
              </Link>
              <Link to="/logout" className="dropdown-item">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
