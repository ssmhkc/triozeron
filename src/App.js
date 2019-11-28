import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
  Redirect
}                                 from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './app/main/Pages/Home';






function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={ Home } />
        </Switch>
    </Router>
  )
}




export default App;
