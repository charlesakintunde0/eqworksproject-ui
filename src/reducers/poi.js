import {  FETCH_POI } from "../constants/actionTypes";


export const poi = (poi = [], action) => {
    switch (action.type) {
        case FETCH_POI:
            return action.payload
        default: 
            return poi
    }
}