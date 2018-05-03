import { SERVER_URL } from '../constants/server';
import * as API from './defaultApi';

const loginUrl = SERVER_URL + "auth/login/email/";
const logoutUrl = SERVER_URL + "auth/logout/";

const resetPasswordUrl = SERVER_URL + "auth/reset_password/";


export const login = (data) => (
  API.stdApiPOST({ data, url: loginUrl })
)

export const resetPassword = (data) => (
  API.stdApiPOST({ data, url: resetPasswordUrl })
)

export const logout = (token) => (
  API.stdApiPOST({ token, url: logoutUrl })
)
