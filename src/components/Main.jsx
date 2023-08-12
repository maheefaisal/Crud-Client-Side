import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./main.css";

const Main = () => {
  return (
    <div className="main-container">
      {/* Navigation Bar */}
      <nav className="main-nav">
        <Link className="main-link" to="/add">
          Add
        </Link>
        {/* Commented out Update link */}
        {/* <Link className="main-link" to="/update">
          Update
        </Link> */}
        <Link className="main-link" to="/showdata">
          Show
        </Link>
      </nav>
      {/* Main Content */}
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
