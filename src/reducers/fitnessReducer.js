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
        case actionTypes.ACTION_LOGIN.failed:
        case actionTypes.ACTION_LOGGED_OUT.success:
            return {};
        default:
            return state;
    }
}

const fitnessReducer = combineReducers({
    fitnesses,
    fitness,
});

export default fitnessReducer;
