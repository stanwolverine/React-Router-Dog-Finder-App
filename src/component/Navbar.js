import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    const navlinks = this.props.paths.map(p => (
      <li className='nav-item' key={p.name}>
        <NavLink
          exact
          className='nav-link'
          to={`/dogs/${p.name.toLowerCase()}`}
        >
          {p.name}
        </NavLink>
      </li>
    ));
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/dogs'>
          Dogs App
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink exact className='nav-link' to='/dogs'>
                Home
              </NavLink>
            </li>
            {navlinks}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
