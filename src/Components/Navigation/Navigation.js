import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, IconButton,  Button, Paper } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


const  Navigation = () =>{

    return (
        // <Router>
        <div>
            <Paper>
            <AppBar position="static" color="red">
            <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="title" color="inherit" >
            <Link to="/" > 
                Pelli Choopulu
            </Link>
            </Typography>
            <Button color="inherit"><Link to="/" > Landing</Link></Button>
            <Button color="inherit"><Link to="/home" > Home</Link></Button>
            <Button color="inherit"><Link to="/about" > About</Link></Button>
            <Button color="inherit"><Link to="/contact" > Contact</Link></Button>
            
            </Toolbar>
            </AppBar>
            </Paper>
        </div>
        // </Router>
    );

}

export default Navigation;