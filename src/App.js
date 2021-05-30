import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import './App.css';
import Home from './components/Home/Home';
import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
