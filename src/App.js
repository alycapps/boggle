import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Play from "./pages/Play"
import NoMatch from "./pages/NoMatch"
import Nav from "./components/Nav"


function App() {
  return (
    <div className="App">
      <Nav/>
      <Router>
          <Switch>
            <Route exact path="/" component={Play}/>
            <Route component={NoMatch} />
          </Switch>
      </Router>
    </div>
    
  );
}

export default App;
