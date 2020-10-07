import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/dashboard/Dashboard"

import './App.css';

function App() {
  return (
    <React.Fragment>
      <Router>
          <div className="App" style={{ backgroundColor: " #edf2f3 " }}>
            <Switch>
              <Route path="/">
                  <Dashboard/>
              </Route>
            </Switch>
          </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
