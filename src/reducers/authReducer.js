import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';


const isLoggedIn = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return true;
        case actionTypes.ACTION_LOGGED_OUT:
            return false;
        default:
            return state;
    }
}
const isLoggingIn = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return true;
        case actionTypes.ACTION_LOGIN.failed:
        case actionTypes.ACTION_LOGGED_OUT:
            return false;
        default:
            return state;
    }
}
const errorMessage = (state = "", action) => {
    switch (action.type) {
        case actionTypes.ACTION_LOGIN.started:
        case actionTypes.ACTION_LOGIN.success:
        case actionTypes.ACTION_LOGGED_OUT:
            return "";
        case actionTypes.ACTION_LOGIN.failed:
            return action.errorMessage;
        default:
            return state;
    }
}

const authReducer = combineReducers({
    isLoggedIn,
    isLoggingIn,
    errorMessage,
});

export default authReducer;
