import * as actionTypes from '../constants/actionTypes';
import * as authApi from '../api/authApi';
import { defaultAction } from './defaultActions';


export const login = (data) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_LOGIN,
    apiCall: () => { return authApi.login(data) },
    onSuccess: (response) => ({
      user: response.user,
      token: response.token,
      fitnesses: response.user.fitness_set,
    }),
    onFailure: (response) => ({ errorMessage: response.message }),
  })
}

export const resetPassword = (data) => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_RESET_PASSWORD,
    apiCall: () => { return authApi.resetPassword(data) },
    onSuccess: (response) => ({ }),
    onFailure: (response) => ({ errorMessage: response.message }),
  })
}

export const logout = () => (dispatch, getState) => {
  defaultAction(dispatch, getState, {
    action: actionTypes.ACTION_LOGGED_OUT,
    apiCall: () => { return authApi.logout(getState().user.token) },
    onSuccess: (response) => ({ }),
    onFailure: (response) => ({ errorMessage: response.message }),
  })

  // localStorage.clear()
}
