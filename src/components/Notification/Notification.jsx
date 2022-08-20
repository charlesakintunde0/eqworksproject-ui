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
        dispatch({type: NOTIFICATION, payload: {showNotification: false,alertType: 'error'}})
      },5000)
   }

  console.log(notification.error,notification.showNotification)
    
  return (
    <>
    <Box className={classes.container}>
     <Slide direction="left" in={notification?.showNotification}  mountOnEnter unmountOnExit>
     <Alert variant="filled" severity={notification?.alertType }>
        You request is now being limited (Too many request, system  will reboot after 60 secs) 
        </Alert>
     </Slide>
    </Box>
    {/* {notification.error === undefined ? <LoadingModal/> : ''} */}
    </>
  )
}

export default Notification