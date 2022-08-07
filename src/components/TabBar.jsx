import React from 'react'
import {
  Box,
  createStyles,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import {useSelector } from 'react-redux'


import ChartTab from './Tabs/ChartTab';
import MapTab from './Tabs/MapTab';
import DataTables from './Tabs/DataTables';

import LoadingModal from './LoadingModal/LoadingModal'

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabsStyles = makeStyles(() =>
  createStyles({
    tabsContainer:{
        position: 'absolute',
        // display:'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        top: '80px',
        width: '100%'
    },
  })
);
const TabBar = () => {
    const classes = TabsStyles()
    const [value, setValue] = React.useState(0);
    const data = useSelector(state => state.poi)
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <>
  {data.length < 0 ? <LoadingModal/> : ''}
     <Box className={classes.tabsContainer}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Charts" {...a11yProps(0)} />
          <Tab label="Datatables" {...a11yProps(1)} />
          <Tab label="Maps" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <ChartTab/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <DataTables/>
      </TabPanel>
      <TabPanel value={value} index={2}>
       
        <MapTab/>
      </TabPanel>
     </Box>
    </>
  )
}

export default TabBar