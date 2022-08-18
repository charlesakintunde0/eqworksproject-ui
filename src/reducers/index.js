import {combineReducers} from 'redux'

import {notification} from './notification'
import {events_per_day} from './events_per_day'
import {events_per_hour} from './events_per_hour'
import {stats_per_day} from './stats_per_day'
import {stats_per_hour} from './stats_per_hour'
import {stats_poi} from './stats_poi'
import {events_poi} from './events_poi'
import {poi} from './poi'


export const reducers = combineReducers({
    notification,
    events_per_day,
    events_per_hour,
    stats_per_day,
    stats_per_hour,
    stats_poi,
    events_poi,
    poi,



})