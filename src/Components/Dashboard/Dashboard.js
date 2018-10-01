import React, { Component } from 'react'
import { Paper, Grid, Divider, Button } from '@material-ui/core';
import { connect } from "react-redux";
import './Dashboard.css';
import ProfileList from "../ProfileList/ProfileList";
import { profiles } from "../../Profiles";
import { viewRecommendedProfile } from '../../actions';

const mapStateToProps = state => {
  return {
    profiles: state.profiles
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewRecoProfiles: () => dispatch(viewRecommendedProfile("Profiles"))
  }
}

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    }
  }

  render() {
    return (
      <div >
        <div className="flex_container">
          <div>
            <Grid container spacing={24}>
              <Grid item xs={6}>
                <Paper className="ma3 pa3 dib bw2 shadow-5 bg-ligt-purple" >
                  <article class="center mw5 mw6-ns hidden ba mv4">
                    <h1 class="f4 bg-near-black white mv0 pv2 ph3">Title of card</h1>
                    <div class="pa3 bt">
                      <p class="f6 f5-ns lh-copy measure mv0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </article>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className="ma3 pa3 dib bw2 shadow-5 mw6">
                  <article class="center mw5 mw6-ns hidden ba mv4">
                    <h1 class="f4 bg-near-black white mv0 pv2 ph3">Title of card</h1>
                    <div class="pa3 bt">
                      <p class="f6 f5-ns lh-copy measure mv0">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                      </p>
                    </div>
                  </article>
                </Paper>
              </Grid>
              <Divider styles={{ margin: "40px" }} inset light />
              <Grid item xs={12}>
                <Paper className="ma3">
                  <ProfileList profiles={profiles} />   
                  <Button onClick={this.props.onViewRecoProfiles}>View All</Button>               
                </Paper>                
              </Grid>
            </Grid>
          </div>
          <div className="f1 w-30 pie ">
            <Paper className="grow shadow-5">

            </Paper>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)