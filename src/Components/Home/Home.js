import React from 'react';
import { Paper, MenuItem, MenuList, Grid } from '@material-ui/core';

const Home = () => {
  return (
    <div>
      <Grid container xs >
        <Grid item xs={2}>
          <Paper >
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Search</MenuItem>
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;