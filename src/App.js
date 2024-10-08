import React from 'react';
import { UserProvider, UserContext } from './UserContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const App = () => {
  return (
    <UserProvider>
      <UserContext.Consumer>
        {/* {({ user }) => (
          <div>
            {user ? (
              <UserProfile />
            ) : (
              <div>
                <h2>Sign Up</h2>
                <SignUp />
                <h2>Sign In</h2>
                <SignIn />
              </div>
            )}
          </div>
        )} */}
        {({ user }) => user ? <UserProfile /> : <SignIn />}
      </UserContext.Consumer>
    </UserProvider>
  );
};

export default App;