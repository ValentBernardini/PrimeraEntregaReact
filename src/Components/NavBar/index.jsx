import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <nav className="navbar">
      <div className="container">
        <NavLink className="navbar-brand" to='/'>Mi Tienda</NavLink>
        <div className="navbar-menu">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" exact to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to='/categoria/nike1'>Nike 1</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="active" to='/categoria/nike2'>Nike 2</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-actions">
          <form className="search-form">
            <input className="search-input" type="search" placeholder="Buscar" aria-label="Buscar" />
            <button className="search-btn" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </form>
          <div className="cart">
            <NavLink className="cart-link" to='/'>
              <CartWidget />
              <span className="item__total">0</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar;
