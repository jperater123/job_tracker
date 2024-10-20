import React from 'react';
import { UserProvider, UserContext } from './UserContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';


const App = () => {

  return (
    <UserProvider>
      <UserContext.Consumer>
        {({ user }) => (
          <Router>
            <Routes>
              {/* Public Routes */}
              <Route path="/SignIn" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              

              {/* Protected Routes */}
              <Route
                path="/profile"
                element={user ? <UserProfile /> : <SignIn />}
              />

            <Route path="/"  element={ user ?<Dashboard /> : <SignIn />}/>

              <Route
                path="/addjobs"
                element={user ? <AddJob /> : <SignIn />}
              />
              {/* Catch-all route for undefined paths */}
              
            </Routes>
          </Router>
        )}
      </UserContext.Consumer>
    </UserProvider>
  );
};

export default App;