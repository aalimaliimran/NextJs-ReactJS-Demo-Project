export const SET_AUTH_TOKEN = 'set_auth_token';
export const API_FAILED = 'Something Went Wrong!';
export const authRole = {
  admin: ['admin'],
  subAdmin: ['subAdmin'],
  naylamDispatcher: ['companyDispatcher'],
  companyDispatcher: ['naylamDispatcher'],
  user: ['user'],
};

export const RoutePermittedRole = {
  admin: 'admin',
  subAdmin: 'subAdmin',
  companyDispatcher: 'companyDispatcher',
  naylamDispatcher: 'naylamDispatcher',
  user: 'user',
};