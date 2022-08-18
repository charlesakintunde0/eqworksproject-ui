import React from 'react'
import {
  Box,
  AppBar,
  createStyles,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Notification from './Notification/Notification';
import { useSelector,useDispatch } from 'react-redux'
import LoadingModal from './LoadingModal/LoadingModal';

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
    const poi = useSelector(state => state.poi)
  return (
  <>
   <Box className={classes.appBarBox}>
   {poi.length === 0 ? <LoadingModal/> : ''}

      <AppBar className={classes.appBar} color="primary">
        <Typography className={classes.headerText} variant="subtitle1">
  
          EQWORKS VISUALIZATION PROJECT
        </Typography>
      </AppBar>
   </Box>
   </>
  )
}

export default AppBarHeader