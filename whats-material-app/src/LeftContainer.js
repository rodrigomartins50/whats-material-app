import React from 'react';
import { Paper, 
         Typography, 
         Grid, 
         CardHeader,  
         Avatar, 
         List, 
         ListItem, 
         ListItemText } from "@material-ui/core";

const LeftContainer = ({ classes, list }) => (
  <Grid item xs={3}>
    <CardHeader
      className={classes.rightBorder}
      avatar={
        <Avatar aria-label="Recipe" className={classes.avatar}>
          H
        </Avatar>
      }
    />
    <Paper className={classes.paper} elevation={0}>
      <Typography className={classes.information} variant="subheader">
        Acesse nossa comunidade no Discord e fique por dentro das novidades!
      </Typography>
    </Paper>
    <List>
      {list.map(item => (
        <ListItem>
          <Avatar>{item.image}</Avatar>
          <ListItemText primary={item.name} secondary={item.text} />
        </ListItem>
      ))}
    </List>
  </Grid>
);

export default LeftContainer