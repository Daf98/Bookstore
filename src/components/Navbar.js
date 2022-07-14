import React from 'react';
import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => (
  <div className="navbar-container">
    <div className="navbar">
      <h1 className="navbar-header">Bookstore CMS</h1>
      <ul className="nav-items">
        <li>
          <NavLink className="nav-link" to="/">BOOKS</NavLink>
        </li>
        <li>
          <NavLink className="nav-link" to="/categories">CATEGORIES</NavLink>
        </li>
      </ul>
    </div>
    <div><FaUserCircle className="nav-icon" /></div>
  </div>

);

export default Navbar;
