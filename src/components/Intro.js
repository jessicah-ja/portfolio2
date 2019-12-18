import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

const Intro = () => {
  const classes = useStyles();
  return (
    <Grid>
      <Typography className={classes.titleName} component='h2' variant='h2'>
        황 지 애
      </Typography>
      <Typography className={classes.titleIntro} component='h4' variant='h4'>
        TITLE INTRO...
       </Typography>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  titleName: {
    color: '#fff',
    fontWeight: 600,
    marginBottom: theme.spacing(4)
  },
  titleIntro: {
    color: '#eee'
  }
}));

export default Intro;