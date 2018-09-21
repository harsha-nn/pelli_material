import React from 'react';
import { Grid, Paper,Tab,Tabs, TextField,Button } from '@material-ui/core';
import '../LandingPage/LandingPage.css';


class LandingPage extends React.Component{
    constructor(){
        super();
        this.state={
            value:0
        }
    }
    handleChange = (event, value) => {
        this.setState({ value });
      };
    render () {
    return (
        <div style={{margin:10}}>
            <Grid container spacing={16}>
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={3}>
                    <Paper style={{margin:10,padding:10,height:450  }} >
                    {
                        this.state.value===0
                        ? <form noValidate autoComplete="on">
                        <TextField
                          id="outlined-name"
                          label="Name"                          
                          defaultValue="enter your name here"
                        //   onChange={this.handleChange('name')}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                        id="standard-password-input"
                        label="Password"                        
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        />
                        <Button variant="contained" color="primary" >
                            Submit
                        </Button>
                        </form>
                        
                        : <form noValidate autoComplete="on">
                        <TextField
                          id="outlined-name"
                          label="Register"                          
                          defaultValue="enter your name here"
                        //   onChange={this.handleChange('name')}
                          margin="normal"
                          variant="outlined"
                        />
                        <TextField
                        id="standard-password-input"
                        label="Password"                        
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                        />
                        <Button variant="contained" color="primary" >
                            Register
                        </Button>
                        </form>                                                                 
                    }                                            
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Signin" />
                            <Tab label="Register" />                            
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className="right_pane">xs=9</Paper>
                </Grid>
            </Grid>
        </div>
    );
}
}

export default LandingPage;