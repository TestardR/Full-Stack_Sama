import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar bg-dark">
        <h1>
          <a href="index.html" className="samaFont">
            <i class="fa fa-universal-access" /> Sama
          </a>
        </h1>
        <ul>
          <li>
            <a href="profiles.html">Users</a>
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
