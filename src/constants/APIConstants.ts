export const CLIENT_ERROR = 422;

export const authAPI = {
  usernameErrorCode: 404,
  passwordErrorCode: 403,
};

export const NO_INTERNET_CONNECTION_CODE = 503;
export const SERVER_ERROR_CODE = 500;

export const apiMethods = {
  post: 'POST',
  get: 'GET',
  put: 'PUT',
  delete: 'DELETE',
};

export type APIMethodsType = 'POST' | 'GET' | 'PUT' | 'DELETE';
