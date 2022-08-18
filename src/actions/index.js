import { FETCH_EVENTS_PER_HOUR, FETCH_EVENTS_PER_DAY,FETCH_STATS_PER_HOUR,FETCH_STATS_PER_DAY,FETCH_POI, FETCH_STATS_POI, FETCH_EVENTS_POI, NOTIFICATION } from "../constants/actionTypes";


import * as api from "../api";


export const fetchEventsHourly = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEventsHourly()

        dispatch({type: FETCH_EVENTS_PER_HOUR, payload: data})
    }catch (error) {
        console.log(error.request.response)
       
    }
}

export const fetchEventsDaily = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEventsDaily()
        dispatch({type: FETCH_EVENTS_PER_DAY, payload: data})
    }catch (error) {
        
    }
}

export const fetchStatsHourly = () => async(dispatch) => {
    try {
        const {data} = await api.fetchStatsHourly()
        dispatch({type: FETCH_STATS_PER_HOUR, payload: data})
    }catch (error) {
        
    }
}
export const fetchStatsDaily = () => async(dispatch) => {
    try {
        const {data} = await api.fetchStatsDaily()

        dispatch({type: FETCH_STATS_PER_DAY, payload: data})
    }catch (error) {
       
    }
}


export const fetchPoi = () => async(dispatch) => {
    try {
        const {data} = await api.fetchPoi()

        dispatch({type: FETCH_POI, payload: data})
    }catch (error) {
        
    }
}

export const fetchStatsPoi = () => async(dispatch) => {
    try {
        const {data} = await api.fetchStatsPoi()

        dispatch({type: FETCH_STATS_POI, payload: data})
    }catch (error) {
      
    }
}

export const fetchEventsPoi = () => async(dispatch) => {
    try {
        const {data} = await api.fetchEventsPoi()

        dispatch({type: FETCH_EVENTS_POI, payload: data})
    }catch (error) {
        dispatch({type: NOTIFICATION, payload: {error:error.request.response, alertType: 'error', showNotification: true}})
    }
}
