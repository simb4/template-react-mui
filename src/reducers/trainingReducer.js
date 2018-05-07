import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const transformTraining = (t) => ({
    id: t.id,
    time: {
        start: t.timestamp_start,
        end: t.timestamp_end,
    },
    name: t.name,
    description: t.description,
    sport_name: t.sport_type.name || '',
    sport_type: t.sport_type.id || '',
    max_users: t.max_users,

})

const trainings = (state = [], action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_TRAININGS.success:
            return (action.trainings || []).map(t => transformTraining(t));
        case actionTypes.ACTION_CREATE_TRAINING.success:
            return [transformTraining(action.training), ...state];
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const trainingIsLoading = (state = false, action) => {
    switch (action.type) {
        case actionTypes.ACTION_GET_TRAININGS.started:
        case actionTypes.ACTION_CREATE_TRAINING.started:
            return true;
        case actionTypes.ACTION_GET_TRAININGS.success:
        case actionTypes.ACTION_GET_TRAININGS.failed:
        case actionTypes.ACTION_CREATE_TRAINING.success:
        case actionTypes.ACTION_CREATE_TRAINING.failed:
            return false;
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const trainingReducer = combineReducers({
    trainings,
    trainingIsLoading,
});

export default trainingReducer;
