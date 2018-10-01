import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Menu,MenuItem,Input } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import MenuIcon from '@material-ui/icons/Menu';


class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            anchorEl: null,
        }
    }
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleMenuClose = () => {
        this.setState({ anchorEl: null });        
    };


    render() {
        const { anchorEl } = this.state;
        const isMenuOpen = Boolean(anchorEl);
        const { isSignedIn, checkSignIn } = this.props;
        const renderMenu = (
            <Menu
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMenuOpen}
                onClose={this.handleMenuClose}
            >
                <MenuItem onClick={this.handleClose}><Link to="/Myprofile" style={{ textDecoration: 'none' }} > My Profile</Link></MenuItem>
                <MenuItem onClick={this.handleClose}>My account</MenuItem>
            </Menu>
        );
        console.log("Navigation-isSignedIn:", isSignedIn);
        return (

            // <Router>
            <div>
                <AppBar position="static" color="inherit">
                    {
                        isSignedIn === "true"
                            ? <Toolbar>
                                <Typography variant="title" color="inherit" >
                                    <Link to="/Dashboard" style={{ textDecoration: 'none' }} >
                                        Pelli Choopulu
                                 </Link>
                                </Typography>
                                <Button color="inherit"><Link to="/Dashboard" style={{ textDecoration: 'none' }} > Home</Link></Button>
                                <div >
                                    {/* <div >
                                        
                                    </div> */}
                                    <SearchIcon />
                                    <Input
                                        placeholder="Search…"
                                        disableUnderline
                                    />
                                </div>
                                <Button color="inherit" onClick={() => checkSignIn("false")}><Link to="/" style={{ textDecoration: 'none' }} > Signout</Link></Button>
                                <IconButton aria-owns={isMenuOpen ? 'material-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleProfileMenuOpen}
                                    color="inherit">
                                    <AccountCircle />
                                </IconButton>
                            </Toolbar>
                            : <Toolbar>
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
                {renderMenu}
            </div>
            // </Router>
        );

    }


}

export default Navigation;