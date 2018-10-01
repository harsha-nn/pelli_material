import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import ProfileList from "../ProfileList/ProfileList";
import { profiles  } from "../../Profiles";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid container >
                    <Grid item xs>
                        <ProfileList  profiles={profiles}/>
                        {/* <div className='bg-light-green dib br3 ma2 pa3 grow b--light-green bw2 shadow-5'>
                            <img src={`https://robohash.org/23?size=200x200`} alt='robo' />
                            <p>Name </p>
                            <p>%match </p>
                        </div> */}

                    </Grid>
                    <Grid item xs>
                        <Paper>
                            <div className='bg-light-green dib br3 ma2 pa3 grow b--light-green bw2 shadow-5'>
                                <img src={`https://robohash.org/32?size=200x200`} alt='robo' />
                                <p>Name </p>
                                <p>%match </p>
                            </div>
                        </Paper>
                    </Grid>
                    <Grid item xs={3} >
                        <Paper style={{height:"600"}}>
                            <h1>Dashboard pie chat</h1>
                        </Paper>
                    </Grid>
                    <Grid container >
                    <Grid item xs={3}>

                        <div className='bg-light-green dib br3 ma2 pa3 grow b--light-green bw2 shadow-5'>
                            <img src={`https://robohash.org/23?size=200x200`} alt='robo' />
                            <p>Name </p>
                            <p>%match </p>
                        </div>

                    </Grid>
                    <Grid item xs={3}>

                        <div className='bg-light-green dib br3 ma2 pa3 grow b--light-green bw2 shadow-5'>
                            <img src={`https://robohash.org/32?size=200x200`} alt='robo' />
                            <p>Name </p>
                            <p>%match </p>
                        </div>
                    </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
