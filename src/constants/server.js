// export const SERVER_URL = "http://52.59.169.79/"
// export const SERVER_URL = "http://18.195.201.196/api/"
export const SERVER_URL = process.env.REACT_APP_ENV === 'prod'
	? "https://api.1fit.kz/"
	: "https://api.1fit.kz/";


