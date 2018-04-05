export const MOBILE_MAX_WIDTH = 480

export const STD_HEADERS = {
  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
}

export const ERRORS = {
	ACCOUNT_NOT_FOUND: "Не удалось найти аккаунт",
  ACCOUNT_ALREADY_EXISTS: "Пользователь с таким именем уже существует",
	NUMBER: "Ошибка # ",
	NO_INTERNET: "Не удалось подключиться к сети",
	INCORRECT_PASSWORD: "Неверный пароль. Повторите попытку",
  INCORRECT_EMAIL: "Неправильный email",
	SERVER_ERROR: "Ошибка на сервере. Код:",
  PASSWORD_NOT_MATCH: "Подтвердите пароль",
  EMPTY_FIELD: "заполните поле '_'"
}