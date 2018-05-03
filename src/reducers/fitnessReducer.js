import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';


const fitnesses = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return action.fitnesses || [];
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const fitness = (state = {}, action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return (action.fitnesses || [{}])[0];
        case actionTypes.ACTION_LOGGED_OUT.success:
            return {};
        default:
            return state;
    }
}

const sports = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_SPORTS.success:
            return action.sports;
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const visits = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ACTION_GET_VISITS.success:
            return visits;
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const fitnessReducer = combineReducers({
    fitnesses,
    fitness,
    sports,
    visits,
});

export default fitnessReducer;
