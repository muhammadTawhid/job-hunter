import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar d-flex  navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand ms-5  text-white ml-auto" href="/home">
          <h4 style={{ fontSize: "2rem" }}>
            <b>Donation</b>
          </h4>
        </a>

        <button
          className="navbar-toggler bg-info"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item mr-4">
              <Link
                className="nav-link active me-5 text-white"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link
                className="nav-link me-5 text-white"
                aria-current="page"
                to="/donate"
              >
                Donate
              </Link>
            </li>
            <li className="nav-item mr-4">
              <Link
                className="nav-link me-5 text-white"
                aria-current="page"
                to="/viewOrder/:id"
              >
                Events
              </Link>
            </li>
            {/* <li className="nav-item">
                        <Link className="nav-link me-5 text-white" aria-current="page" to="/dashboard">Dashboard</Link>
                    </li> */}
            <li className="nav-item mr-4">
              <Link
                className="nav-link me-5 text-white"
                aria-current="page"
                to="/"
              >
                Volanteers
              </Link>
            </li>
            <li className="nav-item mr-5">
              <Link
                className="nav-link me-5 text-white"
                aria-current="page"
                to="/"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
