// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from './components/SignupFormPage';
import * as sessionActions from './store/session';
import Navigation from './components/Navigation';
import TestsPage from './components/TestsPage';
import TestFormPage from './components/TestFormPage';
import HomePage from './components/HomePage';
import TestEditPage from './components/TestEditPage';
import ReviewPage from './components/ReviewPage';
import ReviewFormPage from './components/ReviewFormPage';

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/tests">
            <TestsPage />
          </Route>
          <Route path="/create">
            <TestFormPage />
          </Route>
          <Route path="/test/:id">
            <TestEditPage />
          </Route>
          <Route exact path="/reviews/create">
            <ReviewFormPage />
          </Route>
          <Route path="/reviews">
            <ReviewPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
