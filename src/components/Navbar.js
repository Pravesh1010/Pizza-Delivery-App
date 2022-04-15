import React from "react";
import { useHistory } from "react-router-dom";

export default function NavBar({ cartItems }) {
  const history = useHistory();
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <a className="navbar-brand" onClick={() => history.push("/")}>
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
              <button className="btn btn-dark" onClick={() => history.push('/login')}>
                Login 
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-dark" onClick={() => history.push('/cart')}>
                Cart {cartItems.length}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}



