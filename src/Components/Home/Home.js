import React from 'react';
import { Paper, MenuItem, MenuList, Grid } from '@material-ui/core';
import Dashboard from '../Dashboard/Dashboard';
// import Dashboard from '../Dashboard/Dashboard';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
    }
  }
  handleMenuClick = (event, index) => {
    this.setState({ selectedIndex: index })
    console.log("index = ", index);
    switch (index) {
      case 0: this.props.history.push('/Dashboard');
        break;
      case 1: this.props.history.push('/Profile'); break;

      default: this.props.history.push('/Dashboard')
        break;
    }
  }

  showPage = (page) => {
    switch (page) {
      case 0: return <Dashboard />

      default: return <Dashboard />

    }
  }

  render() {
    return (
      <div>
        <Grid container xs >
          <Grid item xs={2}>
            <Paper>
              <MenuList>
                <MenuItem selected={this.state.selectedIndex === 0}
                  onClick={event => this.handleMenuClick(event, 0)} >Dashboard</MenuItem>
                <MenuItem selected={this.state.selectedIndex === 1}
                  onClick={event => this.handleMenuClick(event, 1)}>Profile</MenuItem>
                <MenuItem selected={this.state.selectedIndex === 2}
                  onClick={event => this.handleMenuClick(event, 2)}>Search</MenuItem>
                <MenuItem selected={this.state.selectedIndex === 3}
                  onClick={event => this.handleMenuClick(event, 3)}>Logout</MenuItem>
              </MenuList>
            </Paper>
          </Grid>
          <Grid item xs>
            <Paper>
              {
                this.showPage(this.state.selectedIndex)
              }
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Home;