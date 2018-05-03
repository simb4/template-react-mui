import * as actionTypes from '../constants/actionTypes';
import * as fitnessApi from '../api/fitnessApi';
import { defaultAction } from './defaultActions';


export const getSports = (data) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_GET_SPORTS,
    apiCall: () => {
      return fitnessApi.getSports(data, getState().user.token)
    },
    onSuccess: (response) => ({ sports: response.sport_types }),
    onFailure: (response) => ({ errorMessage: response.message }),
  })
}

export const getVisits = (data) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_GET_VISITS,
    apiCall: () => {
      return fitnessApi.getVisits(data,
        getState().user.token,
        getState().fitness.fitness.id)
    },
    onSuccess: (response) => ({ visits: response.visits }),
    onFailure: (response) => ({ errorMessage: response.message }),
  })
}
