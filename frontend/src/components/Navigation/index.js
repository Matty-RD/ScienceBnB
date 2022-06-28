import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <button><NavLink to="/login" className="navbar">Log In</NavLink></button>
        <button><NavLink to="/signup"  className="navbar">Sign Up</NavLink></button>
        <button><NavLink to="/tests"  className="navbar">Tests</NavLink></button>
      </>
    );
  }

  return (
    <ul>
      <li>
      <button><NavLink exact to="/home">Home</NavLink></button>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
