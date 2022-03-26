import React from "react";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const history = useHistory();
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a className="navbar-brand" href="#">
          World of Pizza
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Login 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  onClick={() => history.push("/cart")}>
                Cart
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


