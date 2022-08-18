import React, {useState, useEffect} from 'react'
import {
    createStyles,
    Alert,
    Slide,
    Box,
  } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useSelector,useDispatch } from 'react-redux'
import {  NOTIFICATION } from "../../constants/actionTypes";
import LoadingModal from '../LoadingModal/LoadingModal';


const NotificationStyles = makeStyles(() =>
  createStyles({
    container: {
      margin: 10
    }
  })
);


const Notification = () => {
    const classes = NotificationStyles()
    const dispatch = useDispatch()
    const notification = useSelector(state => state.notification)
    const [showNotification, setShowNotification] = useState(false)


   if (notification?.showNotification === true) {
      setTimeout(() => {
        dispatch({type: NOTIFICATION, payload: {error:undefined,showNotification: false,alertType: 'error'}})
      },5000)
   }

  
    
  return (
    <>
    <Box className={classes.container}>
     <Slide direction="left" in={notification?.showNotification}  mountOnEnter unmountOnExit>
     <Alert variant="filled" severity={notification?.alertType }>
        {notification?.error}
        </Alert>
     </Slide>
    </Box>
    {/* {notification.error === undefined ? <LoadingModal/> : ''} */}
    </>
  )
}

export default Notification