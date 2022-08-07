import { FETCH_EVENTS_POI } from "../constants/actionTypes";

export const events_poi = (events_poi = [], action) => {
    switch (action.type) {
        case FETCH_EVENTS_POI:
            return action.payload
        default:
           return events_poi;
    }
}