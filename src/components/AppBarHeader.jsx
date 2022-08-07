import React from 'react'
import {
  Box,
  AppBar,
  createStyles,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';



const AppBarStyles = makeStyles(() =>
  createStyles({
    appBarBox : {
    },
    appBar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height:'70px'
    },
    headerText: {
      fontWeight: '800',

    },

  
  })
);


const AppBarHeader = () => {
    const classes = AppBarStyles()
  return (
   <Box className={classes.appBarBox}>
      <AppBar className={classes.appBar} color="primary">
        <Typography className={classes.headerText} variant="h1">
          EQWORKS VISUALIZATION PROJECT
        </Typography>
      </AppBar>
   </Box>
  )
}

export default AppBarHeader