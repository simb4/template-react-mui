import { STD_HEADERS } from "../constants/constants"
import { transformRequest } from '../utils/transform'
// import qs from "qs"

export const stdApi = (options) => (
  fetch(
    options.url,
    {
      method: "POST",
      headers: options.token ? {
        ...STD_HEADERS,
        "auth-token": options.token,
      } : STD_HEADERS,
      body: JSON.stringify(options.data || {}),
      // body: qs.stringify(options.data || {}),
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