import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap";

export default function NavBar({ cartItems, userName }) {
  const history = useHistory();
  return (
    <div className="nav-container">
      <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-body rounded">
        <h1
          className="navbar-brand text-white font-italic"
          onClick={() => history.push("/")}
        >
          Slice of heaven
        </h1>
        <img src="https://media.istockphoto.com/vectors/funny-pizza-sign-in-retro-style-vector-id1128704035?k=20&m=1128704035&s=612x612&w=0&h=YW0qO0qnxortvu2PJNrop0AFJ1q_26FVMaYnSB553oc=" className="admin-image"></img>
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
            {/* <li className="nav-item">
              <button
                className="btn btn-dark"
                onClick={() => history.push("/login")}
              >
                {userName}
              </button>
            </li> */}
            <li className="nav-item">
              <div class="dropdown">
                <button
                  class="btn btn-white dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  onClick={() => history.push("/login")}
                >
                  {userName}
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a class="dropdown-item" href="#">
                    Orders
                  </a>
                  <a class="dropdown-item" href="/login">
                    Logout
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-white"
                onClick={() => history.push("/cart")}
              >
                Cart {cartItems.length}
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
