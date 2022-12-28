import React from "react";
import { Link } from "react-router-dom";
import Logout from "./logout";
import './navbar.css'

export default function Navbar() {
  return (
    <>
    <div className="block">
      <nav className="dash">
      <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/movieList">MovieList</Link>
          </li>
          <Logout/>
         </ul>
      </nav>
      </div>

    </>
  );
}
