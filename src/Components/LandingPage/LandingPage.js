import React from 'react';
// import { React } from "react-dom";
import { Grid, Paper, Tab, Tabs, Button } from '@material-ui/core';
import { connect } from "react-redux";
import { Link,Redirect } from 'react-router-dom';
import '../LandingPage/LandingPage.css';
import { ON_SIGNIN } from './actions';


const mapStateToProps = state => {
    return {
        user: state.onSignin.user,
        isPending: state.onSignin.isPending,
        error: state.onSignin.error,
        isSignedIn:state.onSignin.isSignedIn,
        isSignedOut:state.onSignOut.isSignedOut
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignin: (event) => {
            event.preventDefault();
            const data = new FormData(event.target);
            console.log(data.get('email'), data.get('password'));
            const user = {
                email: data.get('email'),
                password: data.get('password')
            }
            dispatch(ON_SIGNIN(user))
        }
    }
}


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
    render() {
        const { onSignin, user, isPending,isSignedIn,isSignedOut } = this.props;
        console.log("Landing Page --> user, isPending:",user,isPending);        
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
                                        <form className="measure center" onSubmit={onSignin}>
                                            <label htmlFor="email">Enter your email</label>
                                            <input id="email" name="email" type="email" />
                                            <label htmlFor="birthdate">Enter your birth date</label>
                                            <input id="password" name="password" type="password" />
                                            {
                                                !isSignedIn && !isSignedOut
                                                ?<button >Sign In</button>
                                                : <button><Redirect to="/Dashboard" style={{ textDecoration: 'none' }} >Sign in</Redirect>  </button>
                                            }                                            
                                        </form>
                                    </main>
                                    : <main className="pa4 black-80">
                                        <form className="measure center">
                                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                                <legend className="f4 fw6 ph0 mh0">Register</legend>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" htmlFor="first_name">First Name</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="first_name" id="first_name" />
                                                </div>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" htmlFor="last_name">Last Name</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="last_name" id="last_name" />
                                                </div>
                                                <div className="mt3">
                                                    <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                                    <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" id="email-address" />
                                                </div>
                                                <div className="mv3">
                                                    <label className="db fw6 lh-copy f6" for="password">Password</label>
                                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                                                </div>
                                            </fieldset>
                                            <div className="">
                                                {/* <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Submit" onClick={this.register} /> */}
                                                <Button color="inherit" ><Link to="/CreateProfile" style={{ textDecoration: 'none' }} > Submit</Link></Button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);

{/* <form onSubmit={onSignin}>
                    <label htmlFor="email">Enter your email</label>
                    <input id="email" name="email" type="email" />
                    <label htmlFor="birthdate">Enter your birth date</label>
                    <input id="password" name="password" type="password" />
                    <button>Send data!</button>
                </form>
                {
                    isPending 
                    ? <h1>Loading</h1>
                    :<div> <p>welcome {user.name}</p>
                    <p>Your email is {user.email}</p>
                    
                    </div>
                }         */}