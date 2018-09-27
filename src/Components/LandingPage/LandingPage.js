import React from 'react';
import { Grid, Paper, Tab, Tabs,Button } from '@material-ui/core';
import {Link} from 'react-router-dom';
// import {
//     BrowserRouter as Router,
//     Route,
//     Switch,
//     Link
// } from 'react-router-dom';
// import CreateProfile from '../CreateProfile/CreateProfile';
import '../LandingPage/LandingPage.css';
// import Home from "../Home/Home";
// import couplePic from '../LandingPage/6591.jpg';
// import wedding from '../LandingPage/wedding.jpg';



class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    signIn = (event, value) => {        
        //if signin is successful -- pending
        this.props.history.push('/Home');
    }
    register = (event,value) => {
        //implent validation
        this.props.history.push('/CreateProfile');
    }
    render() {
       
        return (
            <div className="bgimg">
                <Grid container spacing={16}>
                    <Grid item xs={2}>

                    </Grid>
                    <Grid item xs={3} >
                        <Paper style={{ margin: 10, padding: 10, height: 450 }} className="shadow-5" >
                            {
                                this.state.value === 0
                                    ? <main className="pa4 black-80">
                                        <form className="measure center">
                                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                                <legend className="f4 fw6 ph0 mh0 calisto">Sign In</legend>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6 code" for="email-address">Email</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                                </div>
                                                <div className="mv3">
                                                    <label className="db fw6 lh-copy f6 code" for="password">Password</label>
                                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                                </div>
                                                <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label>
                                            </fieldset>
                                            <div className="">
                                                {/* <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={this.signIn} /> */}
                                                {/* <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in" onClick={()=>this.props.checkSignIn()} /> */}
                                                <Button color="inherit" onClick={()=>this.props.checkSignIn()}><Link to="/home" style={{ textDecoration: 'none' }} > Sign In</Link></Button>
                                            </div>
                                            <div className="lh-copy mt3">
                                                <a href="#0" className="f6 link dim black db">Sign up</a>
                                                <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                                            </div>
                                        </form>
                                    </main>

                                    : <main className="pa4 black-80">
                                        <form className="measure center">
                                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                                <legend className="f4 fw6 ph0 mh0">Register</legend>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" for="first_name">First Name</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first_name" id="first_name" />
                                                </div>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" for="last_name">Last Name</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last_name" id="last_name" />
                                                </div>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                                </div>
                                                <div className="mv3">
                                                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                                </div>
                                            </fieldset>
                                            <div className="">
                                                <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" onClick={this.register} />
                                            </div>
                                        </form>
                                    </main>
                            }

                        </Paper>
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                        // centered
                        >
                            <Tab label="Signin" />
                            <Tab label="Register" />
                        </Tabs>
                    </Grid>
                    {/* <Grid item xs={6} className="shadow-5 grow">
                    <Paper className="right_pane"><img src={couplePic} alt="couple"  height="450" /></Paper>
                </Grid> */}
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
