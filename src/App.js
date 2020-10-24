import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Views/Pages/Login/login';
import Sidebar from './Views/sidebar/sidebar';
import Dashboard from './Views/Pages/Dashboard/dashboard';
import ViewBugPage from  './Views/Pages/viewBugs';
import CreateBug from './Views/Components/Bug Create & edit/bugForm';

// destructuring constant
// deconstruct the useSelector, grab state inside useSelector
// we have to deconstruct it because it is inside several parts, as we defined it in index.js 
// auth, bug, user --> these are the keys inside of the state itself
// we grab the auth from the state to define if we are logged in or not
// we only want to render the login only if we are not logged in
function App() {
  const { auth } = useSelector(state => state);
  return (
    // if not logged in, render login page
    <Router>
      {!auth.LoggedIn ? <Login /> :
        <>
          <Sidebar />
          <Switch>
            {/* <Dashboard exact path="/" />
            <ViewBugPage exact path="/viewbugs" />
            <CreateBug exact path="create" title="Create Bug" /> */}
            <Route exact path="/" ><Dashboard /></Route>
            <Route exact path="/viewbugs"><ViewBugPage /></Route>
            <Router path="/create-bug"><div className='page-container'><CreateBug title="Create Bug" /></div></Router>
          </Switch>
        </>
      }
    </Router>
  );
}

export default App;
