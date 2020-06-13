import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/layout/Navbar";
import User from "./Components/Users/User";
import Alert from "./Context/alert/Alert";
import About from "./Components/pages/About";
import Home from "./Components/pages/home";
import NotFound from "./Components/pages/notFound";
import GithubState from "./Context/github/GithubState";
import AlertState from "./Context/alert/alertState";
import "./App.css";
const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};
export default App;
