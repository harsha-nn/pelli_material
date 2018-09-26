import React from 'react';
import {Link} from 'react-router-dom';
import {AppBar, Toolbar, Typography, IconButton,  Button, Paper } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


const  Navigation = () =>{

    return (
        // <Router>
        <div>
            
            <AppBar position="static" color="inherit"> 
            <Toolbar>
            <IconButton color="inherit" aria-label="Menu">
                {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="title" color="inherit" >
            <Link to="/" style={{ textDecoration: 'none' }} > 
                Pelli Choopulu
            </Link>
            </Typography>
            <Button color="inherit"><Link to="/" style={{ textDecoration: 'none' }} > Landing</Link></Button>
            <Button color="inherit"><Link to="/home" style={{ textDecoration: 'none' }} > Home</Link></Button>
            <Button color="inherit"><Link to="/about" style={{ textDecoration: 'none' }} > About</Link></Button>
            <Button color="inherit"><Link to="/contact" style={{ textDecoration: 'none' }} > Contact</Link></Button>
            
            </Toolbar>
            </AppBar>
            
        </div>
        // </Router>
    );

}

export default Navigation;