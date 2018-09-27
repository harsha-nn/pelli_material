import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
// import MenuIcon from '@material-ui/icons/Menu';


const Navigation = ({ isSignedIn }) => {

    return (
        // <Router>
        <div>
            <AppBar position="static" color="inherit">
                
                    {
                        isSignedIn
                            ?<Toolbar>
                             <Typography variant="title" color="inherit" >
                                <Link to="/Home" style={{ textDecoration: 'none' }} >
                                    Pelli Choopulu
                                 </Link>
                            </Typography>
                             <Button color="inherit"><Link to="/home" style={{ textDecoration: 'none' }} > Home</Link></Button>
                             <Button color="inherit" ><Link to="/" style={{ textDecoration: 'none' }} > Signout</Link></Button>

                             </Toolbar>

                            :<Toolbar>
                            <Typography variant="title" color="inherit" >
                                <Link to="/" style={{ textDecoration: 'none' }} >
                                    Pelli Choopulu
                                 </Link>
                            </Typography>
                            <Button color="inherit"><Link to="/about" style={{ textDecoration: 'none' }} > About</Link></Button>
                            <Button color="inherit"><Link to="/contact" style={{ textDecoration: 'none' }} > Contact</Link></Button>                           
                            </Toolbar>
            }

            </AppBar>

        </div>
        // </Router>
    );

}

export default Navigation;