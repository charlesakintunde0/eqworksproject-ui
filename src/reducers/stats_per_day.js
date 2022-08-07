import {  FETCH_STATS_PER_DAY } from "../constants/actionTypes";


export const stats_per_day = (stats_per_day = [], action) => {
    switch (action.type) {
        case FETCH_STATS_PER_DAY:
            return action.payload
        default: 
            return stats_per_day
    }
}