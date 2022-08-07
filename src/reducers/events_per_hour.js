import {  FETCH_EVENTS_PER_HOUR } from "../constants/actionTypes";


export const events_per_hour = (events_per_hour = [], action) => {
    switch (action.type) {
        case FETCH_EVENTS_PER_HOUR:
            return action.payload
        default: 
            return events_per_hour
    }
}