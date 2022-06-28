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
        <NavLink to="/login" className="navbar">Log In</NavLink>
        <NavLink to="/signup"  className="navbar">Sign Up</NavLink>
        <NavLink to="/tests"  className="navbar">Tests</NavLink>
      </>
    );
  }

  return (
    <ul>
      <li>
        <NavLink exact to="/home">Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
