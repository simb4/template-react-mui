import { combineReducers } from 'redux';
import * as actionTypes from '../constants/actionTypes';

const transformVisit = (visit) => ({
    id: visit.id,
    status: visit.status,
    training: {
        start: visit.training.timestamp_start,
        end: visit.training.timestamp_end,
        name: visit.training.sport_type.name,
        type: visit.training.sport_type.type,
    },
    user: {
        id: visit.user.id,
        name: visit.user.full_name,
        avatar: visit.user.avatar,
        phone: visit.user.phone,
    }
})

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
            return action.visits.map(visit => transformVisit(visit));
        case actionTypes.ACTION_LOGGED_OUT.success:
            return [];
        default:
            return state;
    }
}

const visitsAreLoading = (state = false, action) => {
    switch(action.type) {
        case actionTypes.ACTION_GET_VISITS.started:
            return true;
        case actionTypes.ACTION_GET_VISITS.success:
        case actionTypes.ACTION_GET_VISITS.failed:
            return false;
        default:
            return state;
    }
}

const fitnessReducer = combineReducers({
    fitnesses,
    fitness,
    sports,
    visits,
    visitsAreLoading,
});

export default fitnessReducer;
