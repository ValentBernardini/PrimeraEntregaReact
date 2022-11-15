
import React from 'react';
import CartWidget from '../CartWidget';
import { NavLink } from 'react-router-dom';
import '../NavBar/navbar.css'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/nike1'>Nike 1</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/nike2'>Nike 2</NavLink>
        </li>
        <li className="nav-item">
          <div className='cart'>
          <NavLink className="nav-link" ><CartWidget/> </NavLink>
          <span className='item__total'>0</span>
          </div>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default NavBar;

