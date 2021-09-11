import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
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
        </Router>
      </header>
    </div>
  );
}

export default App;
