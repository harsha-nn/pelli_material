import React from 'react';
import { Grid, Paper,Tab,Tabs } from '@material-ui/core';


const LandingPage = () => {
    return (
        <div>
            <Grid container spacing={12}>
                <Grid item xs={3}>
                    <Paper >
                        <div>
                            Lorem   impl
                            sdasdasdassdkasl
                            ahfsdljfhsdjl 
                            fasdhfjklsd ljfs
                            sd ljfhsadljf;sdaj we9uqsa
                             euwhiufhuiweiua jdlAShdJAS' SADHLasl
                             A UISHEADUFWEJ QWE
                             
                        </div>
                        <Tabs
                            value={0}
                            // onChange={this.handleChange}
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                        >
                            <Tab label="Item One" />
                            <Tab label="Item Two" />                            
                        </Tabs>
                    </Paper>
                </Grid>
                <Grid item xs={9}>
                    <Paper >xs=9</Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default LandingPage;