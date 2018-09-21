import React from 'react';
import {Paper, MenuItem, MenuList} from '@material-ui/core';

const Home = () => {
    return (
        <div>
        <Paper style={{width:"100"}}>
        <MenuList>
          <MenuItem>Profile</MenuItem>
          <MenuItem>Search</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
        </div>
    );
}

export default Home;