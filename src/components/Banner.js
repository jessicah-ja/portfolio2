import React from "react";
import { Paper, Typography, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/Banner.css';

function handleMouseOver(e) {
  const text = document.querySelector(".text");
  text.classList.toggle('hidden');
}

function Banner() {
    
    const firstSection = document.querySelector(".section");
    if( firstSection ) {
      firstSection.addEventListener("mouseover", handleMouseOver);
    }

    const classes = useStyles();
    return (
  
        <Paper className={classes.mainPost}>
            <div className={classes.overlay} />
            <Grid container>
            <Grid item md={6}>
              <div className={classes.mainContent}>
                <Typography
                  component='h2'
                  variant='h3'
                  color='inherit'
                  gutterBottom
                  align='center'
                >
                  <ul className="text hidden">
                    <li>D</li>
                    <li>e</li>
                    <li>v</li>
                    <li>e</li>
                    <li>l</li>
                    <li>o</li>
                    <li>p</li>
                    <li>e</li>
                    <li>r</li>
                    <li className="ghost spaced">황</li>
                    <li className="ghost spaced">지</li>
                    <li className="ghost spaced">애</li>
                  </ul>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
    );
}

const useStyles = makeStyles(theme => ({
    mainPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)'
      },
      mainContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
          padding: theme.spacing(7),
          paddingRight: 0
        }
      }
}));

export default Banner;
