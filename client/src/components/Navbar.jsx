import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = () => {
  const handleLogout = () => {
    console.log("logout button is clicked");
    window.localStorage.clear();
    axios
      .get("https://localhost:5000/auth/logout")
      .then((result) => {
        window.location.reload();
        console.log("token is clear " + result);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="navbar-container">
        <div className="logo-side">
          <img src="/assets/logo.png" className="logo-img"/>
          <h2 className="logo-text">Job<span>Portal</span></h2>
        </div>

        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/job" className="nav-link">
            Job
          </Link>
          <Link to="/dashboard" className="nav-link">
            Dashboard
          </Link>
          {window.localStorage.length > 0 ? (
            <Link to="/auth/register">
              <button className="login-nav-btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : (
            <Link to="/register">
              <button className="login-nav-btn">Login</button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
