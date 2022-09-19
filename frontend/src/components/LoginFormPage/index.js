// frontend/src/components/LoginFormPage/index.js
import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './LoginForm.css';

function LoginFormPage() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  const handleClickSignup = (e) => {
    e.preventDefault();
    history.push(`/signup`);
  };

  const demoLogin = () => {
    dispatch(sessionActions.login({
        credential: 'Demo-lition',
        password: 'password'
    })).then(
        (data) => {
            if (data.user)
                return history.push('/home')
        }
    );
};


  if (sessionUser) return (
    <Redirect to="/tests" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h1>Lets get Testing</h1>
      <ul>
        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
      </ul>
      <div>
        <input
          type="text"
          placeholder='Username or Email'
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className='buttons'>
      <button type="submit">Log In</button>
      <button type="submit" onClick={demoLogin}>Demo User</button>
      <button onClick={handleClickSignup}>No Account?</button>
      </div>
    </form>
  );
}

export default LoginFormPage;
