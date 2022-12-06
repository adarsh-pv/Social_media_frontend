/* eslint-disable prettier/prettier */
import axios from 'axios';
import cookie from 'universal-cookie';
const Cookie = new cookie();
const token = Cookie.get('token');

const api = 'http://localhost:4000';
const Instance = axios.create({ baseURL: api, timeout: 5000, headers: { token } });
export const requestsapi = async (body) => {
  body.number = parseInt(body.number);
  await Instance.post('/register', { body });
};
export const loginapi = async (body) => {
  return await Instance.post('login', { body });
};

export const verifyuser = async () => {
  return await Instance.get('/verify');
};
