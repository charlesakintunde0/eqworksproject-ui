import { NOTIFICATION } from "../constants/actionTypes";

export const notification = (notification = [], action) => {
    switch (action.type) {
        case NOTIFICATION:
            return action.payload
        default:
           return notification;
    }
}