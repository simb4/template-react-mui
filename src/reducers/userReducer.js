import { combineReducers } from 'redux'
import * as actionTypes from '../constants/actionTypes'


const token = (state = "", action) => {
    switch(action.type) {
        case actionTypes.ACTION_LOGIN.success:
            return action.token
        case actionTypes.ACTION_LOGGED_OUT.success:
            return ""
        default: 
            return state
    }
}

const user = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ACTION_LOGIN.success:
        case actionTypes.ACTION_UPDATE_PROFILE.success:
            return action.user
        case actionTypes.ACTION_LOGGED_OUT.success:
            return {}
        default:
            return state
    }
}


const userReducer = combineReducers({
    token,
    user,
})

export default userReducer;
