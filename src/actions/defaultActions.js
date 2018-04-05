import { ERRORS } from '../constants/constants'

export const defaultAction = (dispatch, getState, options) => {
  dispatch({ type: options.action.started });
  options.apiCall()
    .then(
      response => {
        if(response.status !== 200) {
          dispatch({
            type: options.action.failed,
            errorMessage: ERRORS.NUMBER + response.status,
          })
        } else {
          response
          .text()
          .then(
            value => {
              const responseObject = JSON.parse(value);
              if(responseObject.code === 0){
                dispatch({
                  type: options.action.success,
                  ...options.onSuccess(responseObject),
                })
              } else {
                dispatch({
                  type: options.action.failed,
                  ...options.onFailure(responseObject)
                })
              }
            }
          )
        }
      },
      error => {
        dispatch({
          type: options.action.failed,
          errorMessage: ERRORS.NO_INTERNET
        })
      }
    )
}