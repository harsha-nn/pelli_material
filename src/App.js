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
import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
      user: state.onSignin.user,
      isPending: state.onSignin.isPending,
      error: state.onSignin.error,
      isSignedIn:state.onSignin.isSignedIn
  }
}

const mapDispatchToProps = dispatch => {
  return {
      // onSignin: (event) => {
      //     event.preventDefault();
      //     const data = new FormData(event.target);
      //     console.log(data.get('email'), data.get('password'));
      //     const user = {
      //         email: data.get('email'),
      //         password: data.get('password')
      //     }
      //     dispatch(ON_SIGNIN(user))
      // }
  }
}

class App extends Component { 
  // constructor(props){
  //   super(props);
  //   this.state= {
  //     isSignedIn:"false",
  //   }
  // }
 
  
  // checkSignIn=(key)=>{
  //   console.log("Check signin called");
  //   // this.setState({isSignedIn:key})
  //   // this.props.history.push('/Home');
  //   this.props.isSignedIn=key;
  // }
  render() {
    const {isSignedIn} = this.props;
    console.log("Is signed in App comp:" , isSignedIn);
    return (
      <div>       
        <Router>
          <div>
          <Navigation isSignedIn={isSignedIn} />
          <Switch>
            <Route path="/" component={LandingPage} exact />        
            {/* <Route path="/" render={()=><LandingPage checkSignIn={this.checkSignIn}/>} exact /> */}            
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

export default connect(mapStateToProps,mapDispatchToProps) (App);
// Signout is not working. Navigation should change to Home,About -- fixed on 4/10
/*
4/10/2018
Navigation is working. Bug: if you immediately sign in after a singout you get redirected to dashboard.
because the isSignedIn and isSignedOut are true. Need to figure out a way to stop the route or call ON_SIGN_IN action.


*/
