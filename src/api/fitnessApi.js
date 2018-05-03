import { SERVER_URL } from '../constants/server';
import * as API from './defaultApi';

const getSportsUrl = SERVER_URL + "main/sport_types/";
const getVisitsUrl = SERVER_URL + "moderators/visits/";

export const getSports = (data, token) => (
  API.stdApiGET({ data, token, url: getSportsUrl })
)

export const getVisits = (data, token, fitness_id) => (
  API.stdApiGET({ data, token, fitness_id, url: getVisitsUrl })
)
