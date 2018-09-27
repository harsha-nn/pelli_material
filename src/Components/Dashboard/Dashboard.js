import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Grid container xs>
                    <Grid item xs={12}>
                        <h1>Dashboard</h1>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;
