import React from 'react';
import { UserProvider, UserContext } from './UserContext';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import UserProfile from './components/UserProfile';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddJob from './components/AddJob';
import SideMenu from './components/SideMenu';


const App = () => {

  return (
    <UserProvider>
      <UserContext.Consumer>
        {({ user }) => (
          <Router>
            <div className='app'>


                {user ? <SideMenu/> : ""}
            <Routes>
              {/* Public Routes */}
              <Route path="/SignIn" element={user ? <Dashboard /> : <SignIn />} />
              <Route path="/signup" element={user ? <Dashboard /> : <SignUp />} />
              

              {/* Protected Routes */}
              <Route
                path="/profile"
                element={user ? <UserProfile /> : <SignIn />}
              />

              <Route path="/"  element={ user ?<Dashboard /> : <SignIn />}/>
              <Route path="/dashboard"  element={ user ?<Dashboard /> : <SignIn />}/>
              <Route
                path="/addjobs"
                element={user ? <AddJob /> : <SignIn />}
              />
              {/* Catch-all route for undefined paths */}
              
            </Routes>
            </div>
          </Router>
        )}
      </UserContext.Consumer>
    </UserProvider>
  );
};

export default App;