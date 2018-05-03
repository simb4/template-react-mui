import { STD_HEADERS } from "../constants/constants"
import { transformRequest } from '../utils/transform'
import _ from 'lodash';
import qs from "qs"

const modifyHeader = (options) => {
  let headers = _.extend({}, STD_HEADERS);
  if (!!options.token)
    headers = _.extend({ 'auth-token': options.token }, headers);
  if (!!options.fitness_id)
    headers = _.extend({ 'fitness-id': options.fitness_id }, headers);
  return headers;
}

export const stdApiPOST = (options) => (
  fetch(
    options.url,
    {
      method: 'POST',
      headers: modifyHeader(options),
      body: JSON.stringify(options.data || {}),
      // body: qs.stringify(options.data || {}),
    }
  )
)

export const stdApiGET = (options) => (
  fetch(
    options.url + '?' + qs.stringify(options.data || {}),
    {
      method: 'GET',
      headers: modifyHeader(options),
    }
  )
)

export const apiFormData = (options) => (
  fetch(
    options.url,
    {
      method: "POST",
      headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        'auth-token': options.token,
      },
      body: options.data
    }
  )
)

export const apiWithArray = (options) => (
  fetch(
    options.url,
    {
      method: "POST",
      headers: !!options.token ? {
        ...STD_HEADERS,
        "auth-token": options.token,
      } : STD_HEADERS,
      body: transformRequest(options.data)
    }
  )
)