/* ================	*/
/* 	user/auth		*/
/* ================	*/

// Related to Login.
export const ACTION_LOGIN = {
	started: "LOGIN_STARTED",
	success: "LOGIN_SUCCESS",
	failed: "LOGIN_FAILED",
}

// Related to log out method
export const ACTION_LOGGED_OUT = {
	started: "LOGOUT_STARTED",
	failed: "LOGOUT_FAILED",
	success: "LOGOUT_SUCCESS",
}

// related to update user
export const ACTION_UPDATE_PROFILE = {
	started: "UPDATE_PROFILE_STARTED",
	success: "UPDATE_PROFILE_SUCCESS",
	failed: "UPDATE_PROFILE_FAILED",
}

// Related to Login.
export const ACTION_RESET_PASSWORD = {
	started: "LOGIN_STARTED",
	success: "LOGIN_SUCCESS",
	failed: "LOGIN_FAILED",
}


// Related to fitness
export const ACTION_GET_SPORTS = {
	started: "GET_SPORTS_STARTED",
	success: "GET_SPORTS_SUCCESS",
	failed: "GET_SPORTS_FAILED",
}

export const ACTION_GET_VISITS = {
	started: "GET_VISITS_STARTED",
	success: "GET_VISITS_SUCCESS",
	failed: "GET_VISITS_FAILED",
}

// classes CRUD
export const ACTION_CREATE_TRAINING = {
	started: "CREATE_TRAINING_STARTED",
	success: "CREATE_TRAINING_SUCCESS",
	failed: "CREATE_TRAINING_FAILED",
}
export const ACTION_GET_TRAININGS = {
	started: "GET_TRAININGS_STARTED",
	success: "GET_TRAININGS_SUCCESS",
	failed: "GET_TRAININGS_FAILED",
}

export const ACTION_GET_STATS = {
	started: "GET_STATS_STARTED",
	success: "GET_STATS_SUCCESS",
	failed: "GET_STATS_FAILED",
}