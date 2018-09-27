import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Navigation from './Components/Navigation/Navigation';
import LandingPage from './Components/LandingPage/LandingPage';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import CreateProfile from './Components/CreateProfile/CreateProfile';
import Dashboard from "./Components/Dashboard/Dashboard";

class App extends Component { 
  render() {
    return (
      <div>
       
        <Router>
          <div>
          <Navigation />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='/CreateProfile' component={CreateProfile} />
            <Route path='/Dashboard' component={Dashboard} />
          </Switch>
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
