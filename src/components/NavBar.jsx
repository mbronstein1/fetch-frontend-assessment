import React from 'react';
import logo1 from '../assets/fetch-logo.gif';
import Auth from '../utils/auth';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='nav'>
      <div className='container'>
        <div>
          <img src={logo1} alt='' height={100} />
          <ul className='list'>
            <li>
              <NavLink className='list-item' to='/'>
                Home
              </NavLink>
            </li>
            <li>
              {Auth.loggedIn() ? (
                <button className='list-item'>Logout</button>
              ) : (
                <NavLink className='list-item' to='/login'>
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
