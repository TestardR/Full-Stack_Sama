import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to="/" className="samaFont">
            <i className="fa fa-universal-access" /> Sama
          </Link>
        </h1>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <a href="posts.html">Messages</a>
          </li>
          <li>
            <a href="posts.html">Media</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
