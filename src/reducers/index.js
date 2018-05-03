import { combineReducers } from 'redux'
import authReducer from './authReducer'
import fitnessReducer from './fitnessReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    fitness: fitnessReducer,
});

export default rootReducer;