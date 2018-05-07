import { combineReducers } from 'redux'
import authReducer from './authReducer'
import fitnessReducer from './fitnessReducer'
import userReducer from './userReducer'
import trainingReducer from './trainingReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    fitness: fitnessReducer,
    training: trainingReducer,
});

export default rootReducer;