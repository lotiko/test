import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Temperature from './components/Temperature';
import CustomizeImage from './components/CustomizeImage';

function App() {
  return (
      <Router>
    
      <header className="App-header">
      <nav>
            <button>
              <Link to="/">Home</Link>
            </button>
            <button>
              <Link to="/temperature">Temperature</Link>
            </button>
            <button>
              <Link to="/customize-image">Customize Image</Link>
            </button>       
        </nav>
      </header>
      <Switch>
        <Route path="/temperature">
          <Temperature/>
        </Route>
        <Route path="/customize-image">
          <CustomizeImage/>
        </Route>
      </Switch>
        </Router>
  );
}

export default App;
