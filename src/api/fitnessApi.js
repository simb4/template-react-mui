import { SERVER_URL } from '../constants/server';
import * as API from './defaultApi';

const getSportsUrl = SERVER_URL + "main/sport_types/";
const getVisitsUrl = SERVER_URL + "moderators/visits/";
const createClassUrl = SERVER_URL + "moderators/trainings/create/";
const getClassesUrl = SERVER_URL + "moderators/trainings/";


export const getSports = (data, token) => (
  API.stdApiGET({ data, token, url: getSportsUrl })
)

export const getVisits = (data, token, fitness_id) => (
  API.stdApiGET({ data, token, fitness_id, url: getVisitsUrl })
)
// classes CRUD
export const createTraining = (data, token, fitness_id) => (
  API.stdApiPOST({ data, token, fitness_id, url: createClassUrl })
)

export const getTrainings = (data, token, fitness_id) => (
  API.stdApiGET({ data, token, fitness_id, url: getClassesUrl })
)
