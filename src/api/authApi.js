import { SERVER_URL } from '../constants/server';
import * as API from './defaultApi'

const loginUrl = SERVER_URL + "auth/login/";
const resetPasswordUrl = SERVER_URL + "auth/reset_password/"
const setPasswordUrl = SERVER_URL + 'auth/set_password_by_code/'
const logoutUrl = SERVER_URL + "auth/logout"

export const login = (data) => (
  API.stdApi({ data, url: loginUrl })
)

export const resetPassword = (data) => (
  API.stdApi({ data, url: resetPasswordUrl })
)

export const setPassword = (data) => (
  API.stdApi({ data, url: setPasswordUrl })
)

export const logout = (token) => (
  API.stdApi({ token, url: logoutUrl })
)
