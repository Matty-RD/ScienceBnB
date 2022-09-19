import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const history = useHistory();

  const handleClickHome = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  const handleClickLogin = (e) => {
    e.preventDefault();
    history.push("/login");
  };

  const handleClickSignup = (e) => {
    e.preventDefault();
    history.push("/signup");
  };

  const handleClickTests = (e) => {
    e.preventDefault();
    history.push("/tests");
  };

  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>

        <button onClick={handleClickLogin}>Log In</button>
        <button onClick={handleClickSignup}>Sign Up</button>
        <button onClick={handleClickTests}>Tests</button>
      </>
    );
  }

  return (
    <div className='navbar'>
      <img src="https://i.imgur.com/Ru0cPOj.png" title="source: imgur.com" height='210' alt='science'/>
      <div className='buttons'>
        <button onClick={handleClickHome}>Home</button>
        {isLoaded && sessionLinks}
      </div>
  </div>
  );
}

export default Navigation;
