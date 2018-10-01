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
import MyProfile from './Components/MyProfile/MyProfile';

class App extends Component { 
  constructor(props){
    super(props);
    this.state= {
      isSignedIn:"false",
    }
  }
  componentDidMount = () => {
    
  }
  
  checkSignIn=(key)=>{
    console.log("Check signin called");
    this.setState({isSignedIn:key})
    // this.props.history.push('/Home');
  }
  render() {
    return (
      <div>
       
        <Router>
          <div>
          <Navigation isSignedIn={this.state.isSignedIn} checkSignIn={this.checkSignIn}/>
          <Switch>
            {/* <Route path="/" component={LandingPage} exact /> */}
            <Route path="/" render={()=><LandingPage checkSignIn={this.checkSignIn}/>} exact />
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='/CreateProfile' component={CreateProfile} />
            <Route path='/Dashboard' component={Dashboard} />
            <Route path='/Myprofile' component={MyProfile} />
          </Switch>
          </div>
        </Router>
       
      </div>
    );
  }
}

export default App;
