import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from './components/home';
import ContactPage from './components/contact';
class App extends Component {
  render() {
    return (
      <div>
      <Router>
        <Switch>
          <Route path="/home" exact component={HomePage}></Route>
          <Route path="/contact" exact component={ContactPage}></Route>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
