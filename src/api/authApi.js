import { SERVER_URL } from '../constants/server';
import * as API from './defaultApi'

const loginUrl = SERVER_URL + "api/auth/login/email/"
const logoutUrl = SERVER_URL + "api/auth/logout/"

const resetPasswordUrl = SERVER_URL + "auth/reset_password/"


export const login = (data) => (
  API.stdApi({ data, url: loginUrl })
)

export const resetPassword = (data) => (
  API.stdApi({ data, url: resetPasswordUrl })
)

export const logout = (token) => (
  API.stdApi({ token, url: logoutUrl })
)
