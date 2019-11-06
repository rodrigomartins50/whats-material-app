import React from 'react';
import { withStyles } from "@material-ui/core/styles";
import ImageIcon from "@material-ui/icons/Image";
import WorkIcon from "@material-ui/icons/Work";
import BeachAccessIcon from "@material-ui/icons/BeachAccess";
import { Grid, Card } from "@material-ui/core";

import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import styles from './StylesApp'

const list = [
  { id: 1, name: "Diego", text: "Lorem ipsum", image: <ImageIcon /> },
  { id: 2, name: "Robson", text: "Lorem ipsum", image: <WorkIcon /> },
  { id: 3, name: "Cleiton", text: "Lorem ipsum", image: <BeachAccessIcon /> }
];

const App = ({classes}) => (
    <div>
      <div className={classes.background} />
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid container>
              <LeftContainer classes={classes} list={list} />
              <RightContainer classes={classes} />
            </Grid>
          </Card>
        </Grid>
      </Grid>
  </div>);

  export default withStyles(styles)(App);
